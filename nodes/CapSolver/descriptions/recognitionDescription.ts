import { INodeProperties } from 'n8n-workflow';
import { captchaTypes, resourceRecognition, TaskTypes } from '../config';

const taskTypeDescriptions: INodeProperties[] = [
	// ImageToText
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.imageToText],
			},
		},
		options: [
			{
				name: TaskTypes.ImageToTextTask,
				value: TaskTypes.ImageToTextTask,
			},
		],
		default: TaskTypes.ImageToTextTask,
		description: 'Task type for ImageToText',
	},

	// ReCaptcha V2
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.recaptchaV2],
			},
		},
		options: [
			{
				name: TaskTypes.ReCaptchaV2Classification,
				value: TaskTypes.ReCaptchaV2Classification,
			},
		],
		default: TaskTypes.ReCaptchaV2Classification,
		description: 'Task type for ReCaptcha V2',
	},

	// AWS WAF
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
		options: [
			{
				name: TaskTypes.AwsWafClassification,
				value: TaskTypes.AwsWafClassification,
			},
		],
		default: TaskTypes.AwsWafClassification,
		description: 'Task type for AWS WAF',
	},

	// Vision Engine
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.visionEngine],
			},
		},
		options: [
			{
				name: TaskTypes.VisionEngine,
				value: TaskTypes.VisionEngine,
			},
		],
		default: TaskTypes.VisionEngine,
		description: 'Task type for Vision Engine',
	},
];

const requiredDescriptions: INodeProperties[] = [
	{
		displayName: 'websiteURL',
		name: 'websiteURL',
		type: 'string',
		placeholder: 'https://example.com/',
		default: '',
		description: 'Page source URL to improve accuracy',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [
					captchaTypes.imageToText,
					captchaTypes.recaptchaV2,
					captchaTypes.awsWaf,
					captchaTypes.visionEngine,
				],
			},
		},
	},

	// ImageToText
	{
		displayName: 'module',
		name: 'module',
		type: 'string',
		default: 'common',
		placeholder: 'common',
		description: 'Specifies the module. All supported models are shown in the table below.',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'body',
		name: 'body',
		type: 'string',
		default: '',
		placeholder: '/9j/4AAQSkZJRgABA......',
		description:
			'Base64 encoded content of the image (no newlines, no data:image/***;charset=utf-8;base64,)',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'images 1',
		name: 'images 1',
		type: 'string',
		default: '',
		description: 'Only for number module, Support up to 9 base64 encoded images each time',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'images 2',
		name: 'images 2',
		type: 'string',
		default: '',
		description: 'Only for number module, Support up to 9 base64 encoded images each time',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'images 3',
		name: 'images 3',
		type: 'string',
		default: '',
		description: 'Only for number module, Support up to 9 base64 encoded images each time',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'images 4',
		name: 'images 4',
		type: 'string',
		default: '',
		description: 'Only for number module, Support up to 9 base64 encoded images each time',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'images 5',
		name: 'images 5',
		type: 'string',
		default: '',
		description: 'Only for number module, Support up to 9 base64 encoded images each time',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'images 6',
		name: 'images 6',
		type: 'string',
		default: '',
		description: 'Only for number module, Support up to 9 base64 encoded images each time',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'images 7',
		name: 'images 7',
		type: 'string',
		default: '',
		description: 'Only for number module, Support up to 9 base64 encoded images each time',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'images 8',
		name: 'images 8',
		type: 'string',
		default: '',
		description: 'Only for number module, Support up to 9 base64 encoded images each time',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},
	{
		displayName: 'images 9',
		name: 'images 9',
		type: 'string',
		default: '',
		description: 'Only for number module, Support up to 9 base64 encoded images each time',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.imageToText],
			},
		},
	},

	// reCAPTCHA v2
	{
		displayName: 'websiteKey',
		name: 'websiteKey',
		type: 'string',
		default: '',
		description: 'Website key to improve accuracy',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.recaptchaV2],
			},
		},
	},
	{
		displayName: 'image',
		name: 'image',
		type: 'string',
		default: '',
		required: true,
		placeholder: '/9j/4AAQSkZJRgA...',
		description: 'Base64 image string',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.recaptchaV2],
			},
		},
	},
	{
		displayName: 'question',
		name: 'question',
		type: 'string',
		default: '',
		required: true,
		placeholder: '/m/04_sv',
		description: 'Please refer to the following list of questions',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.recaptchaV2],
			},
		},
	},

	// AWS WAF
	{
		displayName: 'question',
		name: 'question',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'aws:toycarcity:carcity',
		description: 'For full names of questions, please refer to the following list of questions',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},
	{
		displayName: 'images 1',
		name: 'images 1',
		type: 'string',
		default: '',
		required: true,
		description:
			'Base64 image string, aws:grid supports 9 images each time, other types support 1 image each time',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},
	{
		displayName: 'images 2',
		name: 'images 2',
		type: 'string',
		default: '',
		description:
			'Base64 image string, aws:grid supports 9 images each time, other types support 1 image each time',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},
	{
		displayName: 'images 3',
		name: 'images 3',
		type: 'string',
		default: '',
		description:
			'Base64 image string, aws:grid supports 9 images each time, other types support 1 image each time',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},
	{
		displayName: 'images 4',
		name: 'images 4',
		type: 'string',
		default: '',
		description:
			'Base64 image string, aws:grid supports 9 images each time, other types support 1 image each time',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},
	{
		displayName: 'images 5',
		name: 'images 5',
		type: 'string',
		default: '',
		description:
			'Base64 image string, aws:grid supports 9 images each time, other types support 1 image each time',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},
	{
		displayName: 'images 6',
		name: 'images 6',
		type: 'string',
		default: '',
		description:
			'Base64 image string, aws:grid supports 9 images each time, other types support 1 image each time',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},
	{
		displayName: 'images 7',
		name: 'images 7',
		type: 'string',
		default: '',
		description:
			'Base64 image string, aws:grid supports 9 images each time, other types support 1 image each time',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},
	{
		displayName: 'images 8',
		name: 'images 8',
		type: 'string',
		default: '',
		description:
			'Base64 image string, aws:grid supports 9 images each time, other types support 1 image each time',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},
	{
		displayName: 'images 9',
		name: 'images 9',
		type: 'string',
		default: '',
		description:
			'Base64 image string, aws:grid supports 9 images each time, other types support 1 image each time',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWaf],
			},
		},
	},

	// Vision Engine
	{
		displayName: 'module',
		name: 'module',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'slider_1',
		description: 'For supported models, please refer to the capsolver documentation',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.visionEngine],
			},
		},
	},
	{
		displayName: 'image',
		name: 'image',
		type: 'string',
		default: '',
		required: true,
		placeholder: '/9j/4AAQSkZJRgABA......',
		description:
			'Base64 encoded content of the image (no newlines, no data:image/***;charset=utf-8;base64,)',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.visionEngine],
			},
		},
	},
	{
		displayName: 'imageBackground',
		name: 'imageBackground',
		type: 'string',
		default: '',
		placeholder: '/9j/4AAQSkZJRgABA......',
		description:
			'Base64 encoded content of the background image (no newlines, no data:image/***;charset=utf-8;base64,)',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.visionEngine],
			},
		},
	},
	{
		displayName: 'question',
		name: 'question',
		type: 'string',
		default: '',
		description: 'Only the shein model requires',
		displayOptions: {
			show: {
				'/resource': [resourceRecognition],
				'/operation': [captchaTypes.visionEngine],
			},
		},
	},
];

export const recognitionDescriptions: INodeProperties[] = [
	...taskTypeDescriptions,
	...requiredDescriptions,
];
