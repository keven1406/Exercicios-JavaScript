<!doctype html>
<html lang='pt-br' class = 'elias'>
	<head>
		<title>Teste</title>
		<meta charset = 'UTF-8'/>
	</head>
	<body>
		<script>
			function talksAbout(node, string) {
				if (node.nodeType == document.ELEMENT_NODE) {
					for (var i = 0; i < node.childNodes.length; i++) {
						if (talksAbout(node.childNodes[i], string))
							return true
					}
					return false
				}
				else if (node.nodeType == document.TEXT_NODE) {
					return node.nodeValue.indexOf(string) > -1
				}
			}
			console.log(talksAbout(document.body, "book"))
			console.log(document.body)
			console.log(childNodes in document.documentElement)
		</script>
	</body>
</html>
