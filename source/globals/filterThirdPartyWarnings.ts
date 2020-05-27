const { warn } = console;

console.warn = (msg: string) => {
  if (!msg.includes('has been renamed') && !msg.includes('createClass')) {
    warn(msg);
  }
};
