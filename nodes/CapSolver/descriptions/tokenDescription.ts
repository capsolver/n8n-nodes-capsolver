import { INodeProperties } from 'n8n-workflow';
import { captchaTypes, resourceToken, TaskTypes } from '../config';

const taskTypeDescriptions: INodeProperties[] = [
	// Task type for reCAPTCHA v2
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.recaptchaV2],
			},
		},
		options: [
			// {
			// 	name: TaskTypes.ReCaptchaV2Task,
			// 	value: TaskTypes.ReCaptchaV2Task,
			// },
			{
				name: TaskTypes.ReCaptchaV2TaskProxyLess,
				value: TaskTypes.ReCaptchaV2TaskProxyLess,
			},
			{
				name: TaskTypes.ReCaptchaV2EnterpriseTask,
				value: TaskTypes.ReCaptchaV2EnterpriseTask,
			},
			{
				name: TaskTypes.ReCaptchaV2EnterpriseTaskProxyLess,
				value: TaskTypes.ReCaptchaV2EnterpriseTaskProxyLess,
			},
		],
		default: TaskTypes.ReCaptchaV2TaskProxyLess,
		description: 'Task type for reCAPTCHA v2',
	},

	// Task type for reCAPTCHA v3
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.recaptchaV3],
			},
		},
		options: [
			{
				name: TaskTypes.ReCaptchaV3Task,
				value: TaskTypes.ReCaptchaV3Task,
			},
			{
				name: TaskTypes.ReCaptchaV3TaskProxyLess,
				value: TaskTypes.ReCaptchaV3TaskProxyLess,
			},
			{
				name: TaskTypes.ReCaptchaV3EnterpriseTask,
				value: TaskTypes.ReCaptchaV3EnterpriseTask,
			},
			{
				name: TaskTypes.ReCaptchaV3EnterpriseTaskProxyLess,
				value: TaskTypes.ReCaptchaV3EnterpriseTaskProxyLess,
			},
		],
		default: TaskTypes.ReCaptchaV3TaskProxyLess,
		description: 'Task type for reCAPTCHA v3',
	},

	// Task type for cloudflare turnstile
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.cloudflareTurnstile],
			},
		},
		options: [
			{
				name: TaskTypes.AntiTurnstileTaskProxyLess,
				value: TaskTypes.AntiTurnstileTaskProxyLess,
			},
		],
		default: TaskTypes.AntiTurnstileTaskProxyLess,
		description: 'Task type for cloudflare turnstile',
	},

	// Task type for cloudflare challenge
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.cloudflareChallenge],
			},
		},
		options: [
			{
				name: TaskTypes.AntiCloudflareTask,
				value: TaskTypes.AntiCloudflareTask,
			},
		],
		default: TaskTypes.AntiCloudflareTask,
		description: 'Task type for cloudflare challenge',
	},

	// Task type for GeeTest
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.geeTestV3, captchaTypes.geeTestV4],
			},
		},
		options: [
			{
				name: TaskTypes.GeeTestTaskProxyLess,
				value: TaskTypes.GeeTestTaskProxyLess,
			},
		],
		default: TaskTypes.GeeTestTaskProxyLess,
		description: 'Task type for GeeTest',
	},

	// Task type for DataDome
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.dataDome],
			},
		},
		options: [
			{
				name: TaskTypes.DatadomeSliderTask,
				value: TaskTypes.DatadomeSliderTask,
			},
		],
		default: TaskTypes.DatadomeSliderTask,
		description: 'Task type for DataDome',
	},

	// Task type for AWS WAF
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.awsWaf],
			},
		},
		options: [
			{
				name: TaskTypes.AntiAwsWafTask,
				value: TaskTypes.AntiAwsWafTask,
			},
			{
				name: TaskTypes.AntiAwsWafTaskProxyLess,
				value: TaskTypes.AntiAwsWafTaskProxyLess,
			},
		],
		default: TaskTypes.AntiAwsWafTaskProxyLess,
		description: 'Task type for AWS WAF',
	},

	// Task type for MTCaptcha
	{
		displayName: 'type',
		name: 'type',
		type: 'options',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.mtCaptcha],
			},
		},
		options: [
			{
				name: TaskTypes.MtCaptchaTask,
				value: TaskTypes.MtCaptchaTask,
			},
			{
				name: TaskTypes.MtCaptchaTaskProxyLess,
				value: TaskTypes.MtCaptchaTaskProxyLess,
			},
		],
		default: TaskTypes.MtCaptchaTaskProxyLess,
		description: 'Task type for MTCaptcha',
	},
];

const requiredDescriptions: INodeProperties[] = [
	// Public required parameters
	{
		displayName: 'websiteURL',
		name: 'websiteURL',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'https://example.com/',
		description:
			'The URL of the target webpage that loads the captcha, It’s best to submit the full URL instead of just the host',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [
					captchaTypes.recaptchaV2,
					captchaTypes.recaptchaV3,
					captchaTypes.cloudflareTurnstile,
					captchaTypes.cloudflareChallenge,
					captchaTypes.geeTestV3,
					captchaTypes.geeTestV4,
					captchaTypes.awsWaf,
					captchaTypes.mtCaptcha,
				],
			},
		},
	},
	{
		displayName: 'websiteKey',
		name: 'websiteKey',
		type: 'string',
		default: '',
		required: true,
		placeholder: '',
		description: 'Captcha site key',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [
					captchaTypes.recaptchaV2,
					captchaTypes.recaptchaV3,
					captchaTypes.cloudflareTurnstile,
					captchaTypes.mtCaptcha,
				],
			},
		},
	},
	{
		displayName: 'proxy',
		name: 'proxy',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'ip:port:user:pass',
		description: 'Proxy used for solving captcha',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [
					captchaTypes.recaptchaV2,
					captchaTypes.recaptchaV3,
					captchaTypes.cloudflareChallenge,
					captchaTypes.dataDome,
					captchaTypes.awsWaf,
					captchaTypes.mtCaptcha,
				],
				type: [
					TaskTypes.ReCaptchaV2Task,
					TaskTypes.ReCaptchaV2EnterpriseTask,
					TaskTypes.ReCaptchaV3Task,
					TaskTypes.ReCaptchaV3EnterpriseTask,
					TaskTypes.AntiCloudflareTask,
					TaskTypes.DatadomeSliderTask,
					TaskTypes.AntiAwsWafTask,
					TaskTypes.MtCaptchaTask,
				],
			},
		},
	},

	// GeeTest v3 required parameters
	{
		displayName: 'gt',
		name: 'gt',
		type: 'string',
		default: '',
		required: true,
		description: 'Only Geetest V3 is required',
		displayOptions: {
			show: {
				'/resource': [resourceToken],
				'/operation': [captchaTypes.geeTestV3],
			},
		},
	},
	{
		displayName: 'challenge',
		name: 'challenge',
		type: 'string',
		default: '',
		required: true,
		description: 'Only Geetest V3 is required',
		displayOptions: {
			show: {
				'/resource': [resourceToken],
				'/operation': [captchaTypes.geeTestV3],
			},
		},
	},

	// GeeTest V4 required parameters
	{
		displayName: 'captchaId',
		name: 'captchaId',
		type: 'string',
		default: '',
		required: true,
		description: 'Only GeeTest V4 is required',
		displayOptions: {
			show: {
				'/resource': [resourceToken],
				'/operation': [captchaTypes.geeTestV4],
			},
		},
	},

	// DataDome required parameters
	{
		displayName: 'captchaUrl',
		name: 'captchaUrl',
		type: 'string',
		default: '',
		required: true,
		description:
			'If the URL contains t=bv that means that your ip must be banned, t should be t=fe',
		displayOptions: {
			show: {
				'/resource': [resourceToken],
				'/operation': [captchaTypes.dataDome],
			},
		},
	},
	{
		displayName: 'userAgent',
		name: 'userAgent',
		type: 'string',
		default: '',
		required: true,
		description:
			'It needs to be the same as the userAgent you use to request the website. Please refer to the capsolver documentation.',
		displayOptions: {
			show: {
				'/resource': [resourceToken],
				'/operation': [captchaTypes.dataDome],
			},
		},
	},
];

export const tokenDescriptions: INodeProperties[] = [
	...taskTypeDescriptions,
	...requiredDescriptions,
];
