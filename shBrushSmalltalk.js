SyntaxHighlighter.brushes.Smalltalk = function()
{
	var keywords = 'true false nil self super thisContext';
	
	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'comments' },
		{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString, css: 'string' },
		{ regex: /\w+:/g,                                                css: 'functions'},
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),           css: 'keyword' }
	];
};
 
SyntaxHighlighter.brushes.Smalltalk.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Smalltalk.aliases = ['Smalltalk', 'smalltalk', 'st'];
