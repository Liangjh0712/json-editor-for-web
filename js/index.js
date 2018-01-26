class EditJson {
    constructor(id) {
        try {
            this.node = document.querySelector(id);
        } catch (e) {
            console.log(e);
        }
        this._collapseExpendHandle = this._collapseExpendHandle.bind(this);
        this._colorValueChangeHandle = this._colorValueChangeHandle.bind(this);
        this._editorValueChangeHandle = this._editorValueChangeHandle.bind(this);
        this._editorInsertHandle = this._editorInsertHandle.bind(this);
        this.htmlCodeStr = '';
        this.render(styleJSON);
    }
    render(json) {
        // delete useless  colorpicker node
        document.querySelectorAll('.colorpicker').forEach(node => {
            document.body.removeChild(node);
        });
        this._getHtmlCodeByJson(json);
        this.node.innerHTML = this.htmlCodeStr;
        $('.colorpicker-component').colorpicker();
        this._renderEvent();
    }

    getData() {
        let temp = this._getTextByHtml(this.node.innerHTML);
        temp = temp.replace(/\'(\")\'/gm, '\\\"'); // \" escape
        try {
            let data = JSON.parse(temp);
            console.log(data);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    _getTextByHtml(text) {
        text = text.replace(/\<[^\>]*\>/mg, '');
        text = text.replace(/\ +\n/mg, '');
        text = text.replace(/&nbsp;/img, '');
        return text;
    }

    _getHtmlCodeByJson(json, key, comma) {
        let typeStr = Object.prototype.toString.call(json);
        switch (typeStr) {
            case '[object Object]':
            {
                this.htmlCodeStr += `<div class="jsonView"><div class="expendObj"></div>`;
                this.htmlCodeStr += key ? `<div class="name object-type">"${key}"</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="leftBracket">{</div>
                  <div class="children">`;
                let length = Object.keys(json).length;
                for (let key in json) {
                    let flag = --length > 0 ? ',' : '';
                    this._getHtmlCodeByJson(json[key], key, flag);
                }
                this.htmlCodeStr += `</div>
                  <div class="rightBracket"><span>}</span><div class="comma">${comma || ''}</div><div class="delete"></div><div class="insert"></div></div></div>`;
                break;
            }
            case '[object Array]':
            {
                this.htmlCodeStr += `<div class="jsonView"><div class="expendObj"></div>`;
                this.htmlCodeStr += key ? `<div class="name array-type">"${key}"</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="leftBracket">[</div>
                  <div class="children">`;
                let length = json.length;
                for (let value of json) {
                    let flag = --length > 0 ? ',' : '';
                    this._getHtmlCodeByJson(value, '', flag);
                }
                this.htmlCodeStr += `</div>
                  <div class="rightBracket"><span>]</span><div class="comma">${comma || ''}</div><div class="delete"></div><div class="insert"></div></div></div>`;
                break;
            }
            default:
            {
                let temp = this._judgeFootColor(key, json);
                this.htmlCodeStr += `<div class="jsonView">`;
                this.htmlCodeStr += key ? `<div class="name ${temp[0] || ''}">"${key}"</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="value ${temp[1] || ''}">"${json}"</div>
                                    <div class="children"></div>
                                    <div class="comma">${comma || ''}</div>`;
                this.htmlCodeStr += temp[0] === 'color-type' ? `<div contentEditable="false" class="input-group colorpicker-component" title="Using  option">
                                        <input type="text" class="form-control input-lg colorpicker-value" style="display:none" value="${json}" />
                                        <span class="input-group-addon">
                                        <i style="border: solid 1px #2d3c4d"></i>
                                        </span>
                                    </div>` : '';
                this.htmlCodeStr += `<div class="delete"></div><div class="insert"></div>
                                    </div>`;
            }
        }
    }

    _judgeFootColor(key, value) {
        let type = Object.prototype.toString.call(value);
        switch (type) {
            case '[object String]':
            {
                if (value.match(/^(\#)|^(rgb)/)) {
                    return ['color-type', 'color-val'];
                } else {
                    return '';
                }
            }
            case '[object Boolean]':
            {
                return ['bool-type', 'bool-val'];
            }
            case '[object Number]':
            {
                return ['number-type', 'number-val'];
            }
            case '[object Date]':
            {
                return ['date-type', 'data-val'];
            }
            default:
            {
                return '';
            }
        }
    }

    _partialRender(node) {
        // let name = node.querySelector('.name').textContent;
        // let comma = node.querySelector('.rightBracket>.comma').textContent;
        let text = node.querySelector('.leftBracket').textContent + node.querySelector('.children').textContent + node.querySelector('.rightBracket>span').textContent;
        text = text.replace(/\'(\")\'/gm, '\\\"');
        text = text.replace(/\\/gm, '\\\\');
        // text = text.replace(/(\ {2})+/gm, '');
        text = text.replace(/&nbsp;/ig, '');
        let json = JSON.parse(text);
        this.htmlCodeStr = '';
        let size = Object.keys(json).length;
        for (let key in json) {
            if (size-- > 1) {
                this._getHtmlCodeByJson(json[key], key, ',');
            } else {
                this._getHtmlCodeByJson(json[key], key, '');
            }
        }
        // this._getHtmlCodeByJson(json, key, comma);
        // delete useless  colorpicker node
        document.querySelectorAll('.colorpicker').forEach(node => {
            document.body.removeChild(node);
        });
        node.querySelector('.children').innerHTML = this.htmlCodeStr;
        $('.colorpicker-component').colorpicker();
        this._renderEvent();
        // console.log(Object.keys(json).length, this.htmlCodeStr);
        // let obj = JSON.parse(text);
    }

    _event() {

        //  hover background
        // this.node.addEventListener('mouseover', e => {
        //     e.target.className += ' active-background';
        // });
        // this.node.addEventListener('mouseout', e => {
        //     e.target.className = e.target.className.replace(/\ active\-background/gm, '');
        // });
    }
    _collapseExpendHandle(e) {
        const clickNode = e.target;
        switch (clickNode.className) {
            case 'collapseObj':
            {
                clickNode.className = 'expendObj';
                clickNode.parentNode.querySelector('.children').style.display = 'inline-block';
                break;
            }
            case 'expendObj':
            {
                clickNode.className = 'collapseObj';
                clickNode.parentNode.querySelector('.children').style.display = 'none';
                break;
            }
        }
    }

    _colorValueChangeHandle(e) {
        e.target.parentNode.parentNode.querySelector('.value').innerText = `"${e.target.value}"`;
    }

    _editorValueChangeHandle(e) {
        let tempNode = '';
        this.node.querySelectorAll('.value').forEach(node => {
            if (node.contentEditable === 'true') {
                node.innerHTML = node.textContent;
                node.contentEditable = false;
                node.className = node.className.replace(/insert\-input/mg, '');
                tempNode = node;
            }
        });
        this.node.querySelectorAll('.name').forEach(node => {
            if (node.contentEditable === 'true') {
                node.innerHTML = node.textContent;
                node.contentEditable = false;
                node.className = node.className.replace(/insert\-input/mg, '');
                tempNode = node;
            }
        });
        if (e.target.className.match(/(value)|(name)/)) {
            e.target.contentEditable = true;
            if (e.target !== tempNode) {
                e.target.focus();
                e.target.className += ` editor-input`;
            }
        }
        if (tempNode && e.target !== tempNode) {
            let parentNode = tempNode.parentNode.parentNode;
            while (!parentNode.className.includes('jsonView')) {
                parentNode = parentNode.parentNode;
            }
            this._partialRender(parentNode);
        }
        // this.getData(); // refresh data
        // e.target.addEventListener('DOMCharacterDataModified', evt => {  //&& e.target.className.match(/(value)|(name)/m)
        // let parentNode = e.target.parentNode;
        // while (!parentNode.className.includes('children')) {
        //     parentNode = parentNode.parentNode;
        // }
        // this._partialRender(parentNode.parentNode);
        // });
    }

    _editorInsertHandle(e) {
        if (e.target.className.includes('insert')) {
            let node = e.target;
            if (node.contentEditable === 'false') {
                node.contentEditable = true;
                node.className += ' editor-input';
            } else {
                node.contentEditable = false;
                node.className = node.className.replace(/insert\-input/mg, '');
                let text = node.innerHTML;
                node.innerHTML = this._getTextByHtml(text);
                if (node.textContent.match(/[a-zA-Z]/)) {  // the div includes something and need to be refresh
                    let parentNode = node.parentNode.parentNode;
                    while (!parentNode.className.includes('jsonView')) {
                        parentNode = parentNode.parentNode;
                    }
                    // console.log(node.innerHTML);
                    // this._partialRender(parentNode);
                }
            }
        }
    }

    _renderEvent() {
        // deldete event listener
        this.node.removeEventListener('dblclick', this._editorInsertHandle);
        this.node.removeEventListener('mousedown', this._collapseExpendHandle);
        $('.colorpicker-value').unbind('change', this._colorValueChangeHandle);
        this.node.removeEventListener('dblclick', this._editorValueChangeHandle);
        // expend collapse
        this.node.addEventListener('mousedown', this._collapseExpendHandle);

        // color event      ?????????????????????????????????
        // let colorpickeNodeArrs = this.node.querySelectorAll('.colorpicker-value').entries();
        // for (let arr of colorpickeNodeArrs) {
        //     arr[1].addEventListener('input', e => {
        //         console.log(e.target);
        //         // e.target.parentNode.parentNode.querySelector('.value').innerText = e.target.value;
        //     });
        // }

        $('.colorpicker-value').on('change', this._colorValueChangeHandle);
        this.node.addEventListener('dblclick', this._editorValueChangeHandle);
        this.node.addEventListener('dblclick', this._editorInsertHandle);
    }
}


const editor = new EditJson('#editor');
document.getElementById('test').onclick = e => editor.getData();