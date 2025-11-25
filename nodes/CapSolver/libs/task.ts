import { IExecuteFunctions, NodeOperationError } from 'n8n-workflow';
import { API_URL } from '../config';

export class Task {
	constructor(private executeFunctions: IExecuteFunctions) {}

	async createTask(apiKey: string, task: any) {
		const createTaskPayload = {
			clientKey: apiKey,
			source: 'n8n',
			task: task,
		};

		try {
			const response = await this.executeFunctions.helpers.httpRequest({
				method: 'POST',
				url: `${API_URL}/createTask`,
				body: createTaskPayload,
				json: true,
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!response.taskId) {
				throw new NodeOperationError(
					this.executeFunctions.getNode(),
					`Failed to create task: ${response.errorDescription || JSON.stringify(response)}`,
				);
			}
			return response;
		} catch (error: any) {
			throw new NodeOperationError(
				this.executeFunctions.getNode(),
				`Failed to create task: ${error.message}`,
			);
		}
	}

	async getTaskResult(apiKey: string, taskId: string) {
		const getResultPayload = {
			clientKey: apiKey,
			source: 'n8n',
			taskId: taskId,
		};
		try {
			return await this.executeFunctions.helpers.httpRequest({
				method: 'POST',
				url: `${API_URL}/getTaskResult`,
				body: getResultPayload,
				json: true,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		} catch (error: any) {
			throw new NodeOperationError(
				this.executeFunctions.getNode(),
				`Failed to get task result: ${error.message}`,
			);
		}
	}
}
