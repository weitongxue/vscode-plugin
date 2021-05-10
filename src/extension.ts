import * as vscode from 'vscode';
import Languages_code from './code_hinting/index';
export function activate(context: vscode.ExtensionContext) {
	console.log('插件已被激活');
	// 代码提示
	const provider = vscode.languages.registerCompletionItemProvider('vue', {
		provideCompletionItems(document, position) {
				return Languages_code;
		}
	});
		
	context.subscriptions.push(provider);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log('插件已被注销');
}

// 代码自动补全的配置
// "contributes": {
//   "snippets": [
//     {
//       "language": "lizard",
//       "path": "./src/components/view.json"
//     }
//   ],
//   "languages": [
//     {
//       "id": "lizard",
//       "aliases": [
//         "lizard",
//         "lizard"
//       ],
//       "extensions": [
//         ".vue",
//         ".json"
//       ],
//       "configuration": "./language-configuration.json"
//     }
//   ],
//   "grammars": [
//     {
//       "language": "lizard",
//       "scopeName": "source.lizard",
//       "path": "./syntaxes/lizard.tmLanguage.json"
//     }
//   ]
// },

