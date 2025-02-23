var _0x1510 = ['Error:', 'error', 'catch', 'then', 'log', 'POST', 'getElementById', 'application/json'];
var _0x5e2f = function(_0x15103a, _0x5e2f57) { _0x15103a = _0x15103a - 0x0; var _0x575e09 = _0x1510[_0x15103a]; return _0x575e09; };
console['log']('传输模块加载完成');

function sc() { var _0x53d794, _0x246d99, _0x447be2;
    _0x53d794 = document[_0x5e2f('0x6')]('t1');
    _0x246d99 = document['getElementById']('t2');
    name = _0x53d794['value'];
    ms = _0x246d99['value'];
    console[_0x5e2f('0x4')](name, ms); const _0x454d1f = { 'n': String(name), 'ms': String(ms) };
    fetch('/submit_data', { 'method': _0x5e2f('0x5'), 'headers': { 'Content-Type': _0x5e2f('0x7') }, 'body': JSON['stringify'](_0x454d1f) })['then'](_0x43d79b => _0x43d79b['text']())[_0x5e2f('0x3')](_0x338733 => console[_0x5e2f('0x4')](_0x338733))[_0x5e2f('0x2')](_0x39eb49 => console[_0x5e2f('0x1')](_0x5e2f('0x0'), _0x39eb49)); }