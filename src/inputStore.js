import {decorate, observable} from 'mobx'
const START_PHRASE = "# This is a title \n * test \n * test \n ## This is a subtitle \n Made by [Quardiz](https://github.com/Quardiz) \n \n `<div></div>` \n \n\
```\
// this is multi-line code:\n\
\n\
    function anotherExample(firstLine, lastLine) {\n\
        if (firstLine == '```' && lastLine == '```') {\n\
            return multiLineCode;\n\
        }\n\
    }\n\
```\n\n\
> Block Quotes!\n\n\
**Bold text!**\n\n\
![React Logo w/ Text](https://goo.gl/Umyytc)";
class InputStore {
    input = START_PHRASE;
    editorExpanded = false;
    previewerExpanded = false;
}
decorate(InputStore, {
    input: observable,
    editorExpanded: observable,
    previewerExpanded: observable
})

export const inputStore = new InputStore();

