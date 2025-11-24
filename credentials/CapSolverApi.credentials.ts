import {
	ICredentialType,
	INodeProperties,
	Icon,
	IAuthenticateGeneric,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class CapSolverApi implements ICredentialType {
	name = 'capSolverApi';
	displayName = 'CapSolver API';
	documentationUrl = 'https://docs.capsolver.com/';
	icon = 'file:capsolver.svg' as Icon;
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
			description: 'Your CapSolver API Key',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			body: {
				clientKey: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.capsolver.com/getBalance',
			method: 'POST',
		},
	};
}
