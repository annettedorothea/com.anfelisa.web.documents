const test = require('ava');


test('foo', t => {
    //var d = <button></button>;
    t.pass();
});


test('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});