import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';
import { INodeContext, Solver } from './libs';
import { handleRecognitionActions, handleTokenActions } from './actions';
import { captchaTypes, resourceRecognition, resourceToken } from './config';
import { optionalDescriptions, recognitionDescriptions, tokenDescriptions } from './descriptions';

export class CapSolver implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CapSolver',
		name: 'capsolver',
		icon: 'file:capsolver.svg',
		group: ['transform'],
		version: [1],
		subtitle: '={{$parameter["captchaType"]}} - {{$parameter["taskType"]}}',
		description: 'Captcha solving service - Supports reCAPTCHA, Turnstile, DataDome, etc',
		defaults: {
			name: 'CapSolver',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'capSolverApi',
				required: true,
			},
		],
		properties: [
			// resource
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: resourceToken,
						value: resourceToken,
					},
					{
						name: resourceRecognition,
						value: resourceRecognition,
					},
				],
				noDataExpression: true,
				default: resourceToken,
			},

			// operation token
			{
				displayName: 'Captcha',
				name: 'operation',
				type: 'options',
				default: captchaTypes.recaptchaV2,
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [resourceToken],
					},
				},
				options: [
					{
						name: captchaTypes.recaptchaV2,
						value: captchaTypes.recaptchaV2,
						action: captchaTypes.recaptchaV2,
					},
					{
						name: captchaTypes.recaptchaV3,
						value: captchaTypes.recaptchaV3,
						action: captchaTypes.recaptchaV3,
					},
					{
						name: captchaTypes.cloudflareTurnstile,
						value: captchaTypes.cloudflareTurnstile,
						action: captchaTypes.cloudflareTurnstile,
					},
					{
						name: captchaTypes.cloudflareChallenge,
						value: captchaTypes.cloudflareChallenge,
						action: captchaTypes.cloudflareChallenge,
					},
					{
						name: captchaTypes.geeTestV3,
						value: captchaTypes.geeTestV3,
						action: captchaTypes.geeTestV3,
					},
					{
						name: captchaTypes.geeTestV4,
						value: captchaTypes.geeTestV4,
						action: captchaTypes.geeTestV4,
					},
					{
						name: captchaTypes.dataDome,
						value: captchaTypes.dataDome,
						action: captchaTypes.dataDome,
					},
					{
						name: captchaTypes.awsWaf,
						value: captchaTypes.awsWaf,
						action: captchaTypes.awsWaf,
					},
					{
						name: captchaTypes.mtCaptcha,
						value: captchaTypes.mtCaptcha,
						action: captchaTypes.mtCaptcha,
					},
				],
			},

			// operation recognition
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				default: captchaTypes.imageToText,
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [resourceRecognition],
					},
				},
				options: [
					{
						name: captchaTypes.imageToText,
						value: captchaTypes.imageToText,
						action: captchaTypes.imageToText,
					},
					{
						name: captchaTypes.recaptchaV2,
						value: captchaTypes.recaptchaV2,
						action: captchaTypes.recaptchaV2,
					},
					{
						name: captchaTypes.awsWaf,
						value: captchaTypes.awsWaf,
						action: captchaTypes.awsWaf,
					},
					{
						name: captchaTypes.visionEngine,
						value: captchaTypes.visionEngine,
						action: captchaTypes.visionEngine,
					},
				],
			},

			...tokenDescriptions,
			...recognitionDescriptions,
			...optionalDescriptions,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		// Get credentials
		const credentials = await this.getCredentials('capSolverApi');
		const apiKey = credentials.apiKey as string;
		const solver = new Solver(this, apiKey);

		for (let i = 0; i < items.length; i++) {
			const context: INodeContext = {
				functionThis: this,
				solver,
				items,
				i,
			};

			const resource = this.getNodeParameter('resource', i) as string;
			let responseItem: INodeExecutionData = { json: {} };
			switch (resource) {
				case resourceToken:
					responseItem = await handleTokenActions(context);
					break;
				case resourceRecognition:
					responseItem = await handleRecognitionActions(context);
					break;
				default:
					throw new NodeOperationError(this.getNode(), `Unsupported resource: ${resource}`);
			}
			returnData.push(responseItem);
		}

		return [returnData];
	}
}
