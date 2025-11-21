import { ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

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
}
