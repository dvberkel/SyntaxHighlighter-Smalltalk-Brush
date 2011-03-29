SyntaxHighlighter.brushes.Smalltalk = function()
{
	var keywords = 'true false nil self super thisContext';
	
	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'comments' },
		{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString, css: 'string' },
		{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),          css: 'keyword' }
	];
};
 
SyntaxHighlighter.brushes.Smalltalk.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Smalltalk.aliases = ['Smalltalk', 'smalltalk', 'st'];
