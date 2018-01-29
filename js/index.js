class EditJson {
    constructor(id, styleJSON) {
        try {
            this.node = document.querySelector(id);
            this.styleJSON = styleJSON;
        } catch (e) {
            console.log(e);
        }
        this._collapseExpendHandle = this._collapseExpendHandle.bind(this);
        this._colorValueChangedHandle = this._colorValueChangedHandle.bind(this);
        this._editorValueChangedHandle = this._editorValueChangedHandle.bind(this);
        this._editorInsertHandle = this._editorInsertHandle.bind(this);
        this._editorDeleteHandle = this._editorDeleteHandle.bind(this);
        this._colorPickerChangedHandle = this._colorPickerChangedHandle.bind(this);
        this._autoComplete = this._autoComplete.bind(this);
        this.editorHtml = `<div class="auto-complete-ele"><select size =5>
                            </select></div>`;
        this.autocompleteSource = this._getAllJsonKeys(this.styleJSON);
        this.exportStyleJson = null;
        this.render(this.styleJSON);
    }

    render(json) {
        // delete useless  colorpicker node
        $('.colorpicker').remove();
        this.editorHtml += this._getTemplateHtml(json);
        this.node.innerHTML = this.editorHtml;
        $('.colorpicker-component').colorpicker();
        this._bindEvents();
    }

    getStyleJson() {
        return this.exportStyleJson;
    }

    _getAllJsonKeys(json) {
        const getObjectKeys = obj => {
            let keysArr = Object.keys(obj);
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let t = judgeType(obj[key]);
                    if (t) keysArr = keysArr.concat(t);
                }
            }
            return keysArr;
        };

        const getObjectArrayKeys = arr => {
            let keysArr = [];
            for (let value of arr) {
                let t = judgeType(value);
                if (t) keysArr = keysArr.concat(t);
            }
            return keysArr;
        };

        const judgeType = (value) => {
            let temp = Object.prototype.toString.call(value);
            let type = temp.match(/[a-zA-Z]+/g)[1];
            switch (type) {
                case 'Object':
                {
                    return getObjectKeys(value);
                }
                case 'Array':
                {
                    return getObjectArrayKeys(value);
                }
            }
        };
        let set = new Set(getObjectKeys(json));
        return Array.from(set).sort();
    }

    _autoComplete(e) {
        let node = e.target.parentNode;
        if (!node.className.match(/(name)|(value)/) || node.className.match(/color-val/)) {
            this.node.querySelector('.auto-complete-ele select').style.display = 'none';
            return;
        }
        let text = e.target.textContent.replace(/^\"|\"$/mg, '');
        let arr = this.autocompleteSource.filter(value => value.includes(text));
        if (!arr || arr.length === 0) {
            this.node.querySelector('.auto-complete-ele select').style.display = 'none';
        }
        let str = '';
        for (let i of arr) {
            str = str + `<option value="${i}">${i}</option>`;
        }
        this.node.querySelector('.auto-complete-ele select').innerHTML = str;
        this.node.querySelector('.auto-complete-ele select').style.display = 'block';
        let formerNode = node;
        let [left, top, width] = [node.offsetLeft, node.offsetTop, node.offsetWidth];
        while (node.parentNode !== this.node) {
            if (node.className.includes('jsonView')) {
                left += node.offsetLeft;
                top += node.offsetTop;
            }
            node = node.parentNode;
        }
        this.node.querySelector('.auto-complete-ele select').style.left = left + 'px';
        this.node.querySelector('.auto-complete-ele select').style.top = top + 'px';
        this.node.querySelector('.auto-complete-ele select').style.width = (width > 150 ? width : 150) + 'px';
        this.node.querySelector('.auto-complete-ele select').onclick = (e) => {
            if (e.target.nodeName === 'OPTION') {
                formerNode.textContent = `"${e.target.value}"`;
            }
        };
    }

    _getPlainText(htmlContent) {
        htmlContent = htmlContent.replace(/\<[^\>]*\>/mg, '');
        htmlContent = htmlContent.replace(/\ +\n/mg, '');
        htmlContent = htmlContent.replace(/&nbsp;/img, '');
        return htmlContent;
    }

    _getTemplateHtml(json, key, comma) {
        let templateHtml = '';
        let typeStr = Object.prototype.toString.call(json);
        switch (typeStr) {
            case '[object Object]':
            {
                templateHtml += `<div class="jsonView"><div class="expendObj"></div>`;
                templateHtml += key ? `<div class="name object-type">"${key}"</div><div class="separator">:</div>` : ``;
                templateHtml += `<div class="leftBracket">{</div>
                  <div class="children">`;
                let length = Object.keys(json).length;
                for (let key in json) {
                    let flag = --length > 0 ? ',' : '';
                    templateHtml += this._getTemplateHtml(json[key], key, flag);
                }
                templateHtml += `</div>
                  <div class="rightBracket"><span>}</span><div class="comma">${comma || ''}</div><div class="delete"></div><div class="insert" contentEditable="false"></div></div></div>`;
                break;
            }
            case '[object Array]':
            {
                templateHtml += `<div class="jsonView"><div class="expendObj"></div>`;
                templateHtml += key ? `<div class="name array-type">"${key}"</div><div class="separator">:</div>` : ``;
                templateHtml += `<div class="leftBracket">[</div>
                  <div class="children">`;
                let length = json.length;
                for (let value of json) {
                    let flag = --length > 0 ? ',' : '';
                    templateHtml += this._getTemplateHtml(value, '', flag);
                }
                templateHtml += `</div>
                  <div class="rightBracket"><span>]</span><div class="comma">${comma || ''}</div><div class="delete"></div><div class="insert" contentEditable="false"></div></div></div>`;
                break;
            }
            default:
            {
                let temp = this._renderFontColor(key, json);
                templateHtml += `<div class="jsonView"><div class="delete"></div>`;
                templateHtml += key ? `<div class="name ${temp[0] || ''}">"${key}"</div><div class="separator">:</div>` : ``;
                templateHtml += `<div class="value ${temp[1] || ''}">"${json}"</div>
                                    <div class="children"></div>
                                    <div class="comma">${comma || ''}</div>`;
                templateHtml += temp[0] === 'color-type' ? `<div contentEditable="false" class="input-group colorpicker-component" title="Using  option">
                                        <input type="text" class="form-control input-lg colorpicker-value" style="display:none" value="${json}" />
                                        <span class="input-group-addon">
                                        <i style="border: solid 1px #2d3c4d"></i>
                                        </span>
                                    </div>` : '';
                templateHtml += `<div class="insert" contentEditable="false"></div>
                                    </div>`;
            }
        }
        return templateHtml;
    }

    _renderFontColor(key, value) {
        if (value && (String(value) === 'true' || String(value) === 'false')) {
            return ['bool-type', 'bool-val'];
        }

        if (value && !isNaN(value)) {
            return ['number-type', 'number-val'];
        }

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
            default:
            {
                return '';
            }
        }
    }

    _partialRender(node) {
        // let name = node.querySelector('.name').textContent;
        // let comma = node.querySelector('.rightBracket>.comma').textContent;
        let text = node.querySelector('.leftBracket').textContent + node.querySelector('.children').textContent + node.lastChild.querySelector('span').textContent;
        text = text.replace(/\'(\")\'/gm, '\\\"');
        text = text.replace(/\\/gm, '\\\\');
        // text = text.replace(/(\ {2})+/gm, '');
        text = text.replace(/&nbsp;/ig, '');
        let json = '';
        try {
            json = JSON.parse(text);
            this.exportStyleJson = json;
        } catch (e) {
            return true;
        }
        let arrFlag = true;
        if (Object.prototype.toString.call(json) === '[object Array]') {
            arrFlag = '';
        }
        let size = Object.keys(json).length;
        let tempHtml = '';
        for (let key in json) {
            if (size-- > 1) {
                tempHtml += this._getTemplateHtml(json[key], arrFlag && key, ',');
            } else {
                tempHtml += this._getTemplateHtml(json[key], arrFlag && key, '');
            }
        }
        // this._getTemplateHtml(json, key, comma);
        // delete useless  colorpicker node
        // document.querySelectorAll('.colorpicker').forEach(node => {
        //     document.body.removeChild(node);
        // });
        node.querySelector('.children').innerHTML = tempHtml;
        $('.colorpicker-component').colorpicker();
        this._bindEvents();
        // console.log(Object.keys(json).length, this.editorHtml);
        // let obj = JSON.parse(text);
    }

    _collapseExpendHandle(e) {
        const clickNode = e.target;
        if (clickNode.className.includes('collapseObj')) {
            clickNode.className = 'expendObj';
            clickNode.parentNode.querySelector('.children').style.display = 'inline-block';
        } else if (clickNode.className.includes('expendObj')) {
            clickNode.className = 'collapseObj';
            clickNode.parentNode.querySelector('.children').style.display = 'none';
        }
    }

    _colorPickerChangedHandle(e) {
        e.target.parentNode.parentNode.querySelector('.value').innerText = `"${e.target.value}"`;
    }

    _colorValueChangedHandle(e) {
        if (e.target.parentNode.className.includes('color-val')) {
            let colorValue = e.target.textContent.replace(/\"/mg, '');
            e.target.parentNode.parentNode.querySelector('.colorpicker-value').value = colorValue;
            e.target.parentNode.parentNode.querySelector('i').style.backgroundColor = colorValue;
        }
    }

    _editorValueChangedHandle(e) {
        let tempNode = '';
        this.node.querySelectorAll('.value').forEach(node => {
            if (node.contentEditable === 'true') {
                node.innerHTML = node.textContent;
                node.contentEditable = false;
                node.className = node.className.replace(/editor\-input/mg, '');
                tempNode = node;
            }
        });
        this.node.querySelectorAll('.name').forEach(node => {
            if (node.contentEditable === 'true') {
                node.innerHTML = node.textContent;
                node.contentEditable = false;
                node.className = node.className.replace(/editor\-input/mg, '');
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
            this.node.querySelector('.auto-complete-ele select').style.display = 'none';
            if (this._partialRender(parentNode)) {
                tempNode.contentEditable = true;
                tempNode.focus();
                tempNode.className += ` editor-input`;
            }
        }
        // this.getStyleJson(); // refresh exportStyleJson
        // e.target.addEventListener('DOMCharacterDataModified', evt => {  //&& e.target.className.match(/(value)|(name)/m)
        // let parentNode = e.target.parentNode;
        // while (!parentNode.className.includes('children')) {
        //     parentNode = parentNode.parentNode;
        // }
        // this._partialRender(parentNode.parentNode);
        // });
    }

    _editorDeleteHandle(e) {
        if (e.target.className.includes('delete')) {
            let parentNode = e.target.parentNode;
            while (!parentNode.className.includes('jsonView')) {
                parentNode = parentNode.parentNode;
            }
            if (parentNode.previousSibling && parentNode.previousSibling.nodeName === 'DIV') {
                if (parentNode.previousSibling.querySelector('.rightBracket')) {
                    if (parentNode.querySelector('.children').nextElementSibling.className.includes('comma')) {
                        parentNode.previousSibling.querySelector('.rightBracket>.comma').innerHTML = parentNode.querySelector('.children').nextElementSibling.innerHTML;
                    } else if (parentNode.querySelector('.rightBracket>.comma')) {
                        parentNode.previousSibling.querySelector('.rightBracket>.comma').innerHTML = parentNode.querySelector('.rightBracket>.comma').innerHTML;
                    }
                } else {
                    if (parentNode.querySelector('.children').nextElementSibling.className.includes('comma')) {
                        parentNode.previousSibling.querySelector('.comma').innerHTML = parentNode.querySelector('.children').nextElementSibling.innerHTML;
                    } else if (parentNode.querySelector('.rightBracket>.comma')) {
                        parentNode.previousSibling.querySelector('.comma').innerHTML = parentNode.querySelector('.rightBracket>.comma').innerHTML;
                    }
                }
            }
            parentNode.parentNode.removeChild(parentNode);
        }
    }

    _editorInsertHandle(e) {
        let nodeList = this.node.querySelectorAll('.insert').entries();
        for (let n of nodeList) {
            if (n[1].contentEditable === 'true') {
                let node = n[1];
                node.className = node.className.replace(/editor\-input/mg, '');
                if (node.textContent.match(/[a-zA-Z0-9]/)) { // the div includes something and need to be refresh

                    let text = node.innerHTML;
                    // console.log(node.textContent); /s
                    text = this._getPlainText(text);
                    let temp = node.parentNode;
                    while (!temp.className.includes('jsonView')) {
                        temp = temp.parentNode;
                    }
                    if (temp.nextElementSibling && temp.nextElementSibling.nodeName === 'DIV') {
                        if (!text.match(/\,$/mg)) {
                            text += ',';
                        }
                    }
                    if (temp.previousSibling && temp.previousSibling.nodeName === 'DIV') {
                        if (!text.match(/^\,/mg)) {
                            text = ',' + text;
                        }
                    }
                    node.innerHTML = text;

                    let parentNode = '';
                    if (node.parentNode.className.includes('rightBracket')) {
                        parentNode = node.parentNode;
                    } else {
                        parentNode = node;
                    }
                    parentNode = parentNode.parentNode.parentNode;
                    while (!parentNode.className.includes('jsonView')) {
                        parentNode = parentNode.parentNode;
                    }

                    if (this._partialRender(parentNode)) {
                        node.contentEditable = true;
                        node.className += ' editor-error';
                    } else {
                        if (node.previousSibling.nodeName === 'BR') {
                            node.parentNode.removeChild(node.previousSibling);
                        }
                        node.contentEditable = false;
                        node.className = node.className.replace(/editor\-error/mg, '');
                        node.className = node.className.replace(/insert\-margin/mg, '');
                    }
                } else {
                    if (node.previousSibling.nodeName === 'BR') {
                        node.parentNode.removeChild(node.previousSibling);
                    }
                    node.contentEditable = false;
                    node.className = node.className.replace(/editor\-error/mg, '');
                    node.className = node.className.replace(/insert\-margin/mg, '');
                }
            }
        }

        this.node.querySelector('.auto-complete-ele select').style.display = 'none';
        if (e.target.className.includes('insert')) {
            let node = e.target;
            if (node.contentEditable === 'false') {
                if (node.previousSibling.nodeName !== 'BR') {
                    node.insertAdjacentHTML('beforebegin', `<br \\>`);
                    node.className += ' insert-margin';
                }
                node.contentEditable = true;
                node.focus();
            }
        }
    }

    _bindEvents() {
        // deldete event listener
        // this.node.removeEventListener('dblclick', this._editorInsertHandle);
        // this.node.removeEventListener('dblclick', this._editorDeleteHandle);
        // this.node.removeEventListener('mousedown', this._collapseExpendHandle);
        // $('.colorpicker-value').unbind('change', this._colorToValueChangeHandle);
        // this.node.removeEventListener('DOMCharacterDataModified', this._valueToColorChangeHandle);
        // this.node.removeEventListener('DOMCharacterDataModified', this._autoComplete);
        // this.node.removeEventListener('dblclick', this._editorValueChangedHandle);

        // expend collapse
        this.node.addEventListener('mousedown', this._collapseExpendHandle);

        // color event      ?????????????????????????????????
        let colorpickeNodeArrs = this.node.querySelectorAll('.colorpicker-value').entries();
        for (let arr of colorpickeNodeArrs) {
            arr[1].onchange = this._colorPickerChangedHandle;
        }

        // $('.colorpicker-value').on('change', this._colorToValueChangeHandle);
        this.node.addEventListener('DOMCharacterDataModified', this._colorValueChangedHandle);
        this.node.addEventListener('DOMCharacterDataModified', this._autoComplete);
        this.node.addEventListener('mousedown', this._editorValueChangedHandle);
        this.node.addEventListener('mousedown', this._editorInsertHandle);
        this.node.addEventListener('mouseup', this._editorDeleteHandle);
    }
}


const editor = new EditJson('#editor', styleJSON);