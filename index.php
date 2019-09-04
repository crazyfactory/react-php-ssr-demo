<?
require_once('vendor/autoload.php');
use Spatie\Ssr\Renderer;
use Spatie\Ssr\Engines\Node;

$GLOBALS['CONFIG']['manifest_file_names'] = [
	'client.manifest.json',
	'server.manifest.json'
];

$manifest = [];
foreach ($GLOBALS['CONFIG']['manifest_file_names'] as $fileName) {
	$mapping = json_decode(file_get_contents(__DIR__ . '/build/' . $fileName), true);
	if ($mapping) {
		$manifest = array_merge($manifest, $mapping);
	}
}

$context = [
	'counter' => [
		'decrementedNum' => 10,
		'incrementedNum' => 10,
		'offset' => 5
	]
];

$engine = new Node('node', '/var/www/project/temp');
$renderer = new Renderer($engine);
$offset = $renderer
	->context($context)
	->entry(__DIR__ . $manifest['offset-server.js'])
	->render();
$increment = $renderer
	->context($context)
	->entry(__DIR__ . $manifest['increment-server.js'])
	->render();
$decrement = $renderer
	->context($context)
	->entry(__DIR__ . $manifest['decrement-server.js'])
	->render();
?>
<html>
	<head></head>
	<body>
		Offset
		<div id="offset"><?php echo $offset; ?></div>
		<br/>
		<br/>
		<br/>
		Increment
		<div id="increment"><?php echo $increment; ?></div>
		<br/>
		<br/>
		<br/>
		Decrement
		<div id="decrement"><?php echo $decrement; ?></div>
		<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
		<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
		<script>
			window.__INITIAL_STATE__ = <? echo json_encode($context) ?>
		</script>
		<script type="text/javascript" src="<? echo $manifest['client.js'] ?>"></script>
	</body>
</html>
