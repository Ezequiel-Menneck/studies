(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.

const getFileStream = async (url) => {
// implementation
};

(async () => {
const stream = await getFileStream("https://domain.name/path/file.ext");
for await (const chunk of stream) {
    console.log({ chunk });
}
})();
  