// process.stdin e process.stdout são streams,
// tudo que for lido pelo stdin, será encaminhado para o stdout.
process.stdin.pipe(process.stdout);
