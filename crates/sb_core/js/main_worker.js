import { KHULNASOFT_USER_WORKERS } from 'ext:sb_user_workers/user_workers.js';
import { applyKhulnasoftTag } from 'ext:sb_core_main_js/js/http.js';
import { core } from 'ext:core/mod.js';

const ops = core.ops;

Object.defineProperty(globalThis, 'EdgeRuntime', {
	get() {
		return {
			userWorkers: KHULNASOFT_USER_WORKERS,
			getRuntimeMetrics: () => /* async */ ops.op_runtime_metrics(),
			applyKhulnasoftTag: (src, dest) => applyKhulnasoftTag(src, dest),
			systemMemoryInfo: () => ops.op_system_memory_info(),
		};
	},
	configurable: true,
});
