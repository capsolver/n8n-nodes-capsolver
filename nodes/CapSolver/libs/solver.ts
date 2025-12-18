import { IExecuteFunctions, NodeOperationError, sleep } from 'n8n-workflow';
import { Task } from './task';
import { resourceRecognition, TIME_OUT } from '../config';

export class Solver {
	private task: Task;
	private readonly apiKey: string;

	constructor(
		private executeFunctions: IExecuteFunctions,
		apiKey: string,
	) {
		this.task = new Task(executeFunctions);
		this.apiKey = apiKey;
	}

	async solve(task: any, resource: string): Promise<any> {
		// Step 1: Create task
		const createTaskResponse = await this.task.createTask(this.apiKey, task);
		if (resource === resourceRecognition) {
			return createTaskResponse;
		}
		const taskId = createTaskResponse.taskId;

		// Step 2: Get task result
		const startTime = Date.now();
		while (true) {
			const resultResponse = await this.task.getTaskResult(this.apiKey, taskId);
			const status = resultResponse.status;

			if (status === 'ready') {
				return resultResponse;
			} else if (status === 'failed' || resultResponse.errorId) {
				throw new NodeOperationError(
					this.executeFunctions.getNode(),
					`Solve failed: ${resultResponse.errorDescription || JSON.stringify(resultResponse)}`,
				);
			}

			if (Date.now() - startTime >= TIME_OUT) {
				throw new NodeOperationError(
					this.executeFunctions.getNode(),
					`Get task result timeout: unable to solve within ${TIME_OUT} seconds`,
				);
			}
			await sleep(1000);
		}
	}
}
