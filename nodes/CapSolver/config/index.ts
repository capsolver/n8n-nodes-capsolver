export const API_URL = 'https://api.capsolver.com';
export const TIME_OUT = 120000;

// resource
export const resourceRecognition = 'Recognition';
export const resourceToken = 'Token';

// captcha type
export enum captchaTypes {
	recaptchaV2 = 'reCAPTCHA v2',
	recaptchaV3 = 'reCAPTCHA v3',
	cloudflareTurnstile = 'Cloudflare Turnstile',
	cloudflareChallenge = 'Cloudflare Challenge',
	geeTestV3 = 'GeeTest V3',
	geeTestV4 = 'GeeTest V4',
	dataDome = 'DataDome',
	awsWaf = 'AWS WAF',
	mtCaptcha = 'MTCaptcha',

	imageToText = 'Image To Text',
	visionEngine = 'Vision Engine',
}

// task type
export enum TaskTypes {
	ReCaptchaV2Task = 'ReCaptchaV2Task',
	ReCaptchaV2TaskProxyLess = 'ReCaptchaV2TaskProxyLess',
	ReCaptchaV2EnterpriseTask = 'ReCaptchaV2EnterpriseTask',
	ReCaptchaV2EnterpriseTaskProxyLess = 'ReCaptchaV2EnterpriseTaskProxyLess',
	ReCaptchaV3Task = 'ReCaptchaV3Task',
	ReCaptchaV3TaskProxyLess = 'ReCaptchaV3TaskProxyLess',
	ReCaptchaV3EnterpriseTask = 'ReCaptchaV3EnterpriseTask',
	ReCaptchaV3EnterpriseTaskProxyLess = 'ReCaptchaV3EnterpriseTaskProxyLess',
	AntiTurnstileTaskProxyLess = 'AntiTurnstileTaskProxyLess',
	AntiCloudflareTask = 'AntiCloudflareTask',
	GeeTestTaskProxyLess = 'GeeTestTaskProxyLess',
	DatadomeSliderTask = 'DatadomeSliderTask',
	AntiAwsWafTask = 'AntiAwsWafTask',
	AntiAwsWafTaskProxyLess = 'AntiAwsWafTaskProxyLess',
	MtCaptchaTask = 'MtCaptchaTask',
	MtCaptchaTaskProxyLess = 'MtCaptchaTaskProxyLess',

	ImageToTextTask = 'ImageToTextTask',
	ReCaptchaV2Classification = 'ReCaptchaV2Classification',
	AwsWafClassification = 'AwsWafClassification',
	VisionEngine = 'VisionEngine',
}
