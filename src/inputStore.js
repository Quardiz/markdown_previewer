import {decorate, observable} from 'mobx'
class InputStore {
    input = 'Test\n# Test\n# Test\n# Test\n# Test\n';
    editorExpanded = false;
    previewerExpanded = false;
}
decorate(InputStore, {
    input: observable,
    editorExpanded: observable,
    previewerExpanded: observable
})

export const inputStore = new InputStore();

