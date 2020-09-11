const log = console.log;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);

createFlow([
    () => log("a"),
    () => log("b"),
    subFlow,
    [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
    console.log("done");
});
// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印

function createFlow(fns) {
    fns = fns.flat(Infinity).slice()
    function* factory(fns) {
        const len = fns.length;
        for (let i = 0; i < len; i++) {
            yield fns[i];
        }
    }

    let g = factory(fns);

    function run(cb) {
        let next = g.next();
        if (!next.done) {
            let value = next.value;
            if (value.isCreateFlow) {
                value.run(() => run(cb))
            } else {
                let result = value();
                if (result instanceof Promise) {
                    result.then(() => run(cb));
                } else {
                    run(cb);
                }
            }
        } else if (cb) {
            cb()
        }
    }

    return {
        isCreateFlow: true,
        run
    }
}