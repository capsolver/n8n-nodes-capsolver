import { captchaTypes, resourceToken } from '../config';

export const optionalDescriptions: any[] = [
	{
		displayName: 'Optional',
		name: 'optional',
		type: 'collection',
		placeholder: 'Add optional parameters',
		default: {},
		options: [
			// reCAPTCHA v2 v3 optional parameters
			{
				displayName: 'pageAction',
				name: 'pageAction',
				type: 'string',
				default: '',
				description:
					'For ReCaptchaV2, if there is an sa parameter in the payload of the /anchor endpoint, please submit its value.<br><br>For ReCaptchaV3: You can find the value of the action parameter by searching for grecaptcha.execute',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.recaptchaV2, captchaTypes.recaptchaV3],
					},
				},
			},
			{
				displayName: 'enterprisePayload',
				name: 'enterprisePayload',
				type: 'json',
				default: '{ "s": "" }',
				description:
					'For ReCaptchaV2 enterprise version, if there is an s parameter in the payload of the /anchor endpoint, please submit its value.<br><br>For ReCaptchaV3 enterprise version, search for grecaptcha.enterprise.render and pass the s parameter',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.recaptchaV2, captchaTypes.recaptchaV3],
					},
				},
			},
			{
				displayName: 'isInvisible',
				name: 'isInvisible',
				type: 'boolean',
				default: false,
				description:
					'Pass true if there is no “I’m not a robot” checkbox but the challenge will still appear, usually required in v2 invisible mode',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.recaptchaV2],
					},
				},
			},
			{
				displayName: 'isSession',
				name: 'isSession',
				type: 'boolean',
				default: false,
				description:
					'Session mode, when enabled, will return a recaptcha-ca-t value, which is used as a cookie. It usually appears in v3.<br><br>Note: Some websites require a recaptcha-ca-e value, which usually appears in v2. If this value is present, it will be automatically returned without any additional parameter settings.',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.recaptchaV2, captchaTypes.recaptchaV3],
					},
				},
			},
			{
				displayName: 'apiDomain',
				name: 'apiDomain',
				type: 'string',
				placeholder: 'http://www.recaptcha.net/',
				default: '',
				description:
					'The domain name for loading the captcha. Usually, this parameter does not need to be passed.<br><br>- http://www.google.com/<br>- http://www.recaptcha.net/.',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.recaptchaV2, captchaTypes.recaptchaV3],
					},
				},
			},

			// Cloudflare turnstile optional parameters
			{
				displayName: 'metadata.action',
				name: 'action',
				type: 'string',
				default: '',
				description: 'The value of the data-action attribute of the Turnstile element if it exists',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.cloudflareTurnstile],
					},
				},
			},
			{
				displayName: 'metadata.cdata',
				name: 'cdata',
				type: 'string',
				default: '',
				description: 'The value of the data-cdata attribute of the Turnstile element if it exists',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.cloudflareTurnstile],
					},
				},
			},

			// Cloudflare challenge optional parameters
			{
				displayName: 'userAgent',
				name: 'userAgent',
				type: 'string',
				placeholder:
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
				default: '',
				description:
					'The user-agent you used to request the target website. Only Chrome’s userAgent is supported.',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.cloudflareChallenge],
					},
				},
			},
			{
				displayName: 'html',
				name: 'html',
				type: 'string',
				default: '',
				description:
					'The response of requesting the target website, it usually contains “Just a moment…” and status code is 403. we need this html for some websites, please be sure to use your sticky proxy to dynamically scrape the HTML every time.',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.cloudflareChallenge],
					},
				},
			},

			// GeeTest v3 v4 optional parameters
			{
				displayName: 'geetestApiServerSubdomain',
				name: 'geetestApiServerSubdomain',
				type: 'string',
				placeholder: 'api.geetest.com',
				default: '',
				description: 'Special api subdomain, example: api.geetest.com',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.geeTestV3, captchaTypes.geeTestV4],
					},
				},
			},

			// AWS WAF optional parameters
			{
				displayName: 'awsKey',
				name: 'awsKey',
				type: 'string',
				default: '',
				description: 'The key value returned by the captcha page',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.awsWaf],
					},
				},
			},
			{
				displayName: 'awsIv',
				name: 'awsIv',
				type: 'string',
				default: '',
				description: 'The iv value returned by the captcha page',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.awsWaf],
					},
				},
			},
			{
				displayName: 'awsContext',
				name: 'awsContext',
				type: 'string',
				default: '',
				description: 'The context value returned by the captcha page',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.awsWaf],
					},
				},
			},
			{
				displayName: 'awsChallengeJS',
				name: 'awsChallengeJS',
				type: 'string',
				default: '',
				description: 'The challenge.js link returned by the captcha page',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.awsWaf],
					},
				},
			},
			{
				displayName: 'awsApiJs',
				name: 'awsApiJs',
				type: 'string',
				default: '',
				description: 'The jsapi.js link returned by the captcha page',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.awsWaf],
					},
				},
			},
			{
				displayName: 'awsProblemUrl',
				name: 'awsProblemUrl',
				type: 'string',
				default: '',
				description:
					'The problem endpoint URL containing keywords like problem, num_solutions_required, etc',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.awsWaf],
					},
				},
			},
			{
				displayName: 'awsApiKey',
				name: 'awsApiKey',
				type: 'string',
				default: '',
				description: 'The api_key value of the problem endpoint',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.awsWaf],
					},
				},
			},
			{
				displayName: 'awsExistingToken',
				name: 'awsExistingToken',
				type: 'string',
				default: '',
				description: 'The aws-waf-token used for the last verification',
				displayOptions: {
					show: {
						'/resource': [resourceToken],
						'/operation': [captchaTypes.awsWaf],
					},
				},
			},
		],
	},
];
