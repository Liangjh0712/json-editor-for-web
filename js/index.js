class EditJson {
    constructor(id) {
        try {
            this.node = document.querySelector(id);
        } catch (e) {
            console.log(e);
        }
        this.htmlCodeStr = '';
        this.render(styleJSON);
        this._event();
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
        let temp = this.node.textContent;
        temp = temp.replace(/\'(\")\'/gm, '\\\"'); // \" escape
        try {
            let data = JSON.parse(temp);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    _getHtmlCodeByJson(json, key, comma) {
        let typeStr = Object.prototype.toString.call(json);
        switch (typeStr) {
            case '[object Object]':
            {
                this.htmlCodeStr += `<div class="jsonView"><div class="expendObj"></div>`;
                this.htmlCodeStr += key ? `<div class="name object-type">"${key}"</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="bracket">{</div>
                  <div class="children">`;
                let length = Object.keys(json).length;
                for (let key in json) {
                    let flag = --length > 0 ? ',' : '';
                    this._getHtmlCodeByJson(json[key], key, flag);
                }
                this.htmlCodeStr += `</div>
                  <div class="bracket">}<div class="comma">${comma || ''}</div><div class="insert"></div><div class="delete"></div></div></div>`;
                break;
            }
            case '[object Array]':
            {
                this.htmlCodeStr += `<div class="jsonView"><div class="expendObj"></div>`;
                this.htmlCodeStr += key ? `<div class="name array-type">"${key}"</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="bracket">[</div>
                  <div class="children">`;
                let length = json.length;
                for (let value of json) {
                    let flag = --length > 0 ? ',' : '';
                    this._getHtmlCodeByJson(value, '', flag);
                }
                this.htmlCodeStr += `</div>
                  <div class="bracket">]<div class="comma">${comma || ''}</div><div class="insert"></div><div class="delete"></div></div></div>`;
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
                this.htmlCodeStr += `<div class="insert"></div>
                                    <div class="delete"></div>
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
        let text = node.textContent;
        console.log(text);
        // let obj = JSON.parse(text);
    }

    _event() {
        // expend collapse
        this.node.addEventListener('mousedown', e => {
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
        });
        //  hover background
        // this.node.addEventListener('mouseover', e => {
        //     e.target.className += ' active-background';
        // });
        // this.node.addEventListener('mouseout', e => {
        //     e.target.className = e.target.className.replace(/\ active\-background/gm, '');
        // });
    }
    _renderEvent() {
        // color event
        // let colorpickeNodeArrs = this.node.querySelectorAll('.colorpicker-value').entries();
        // for (let arr of colorpickeNodeArrs) {
        //     arr[1].addEventListener('input', e => {
        //         console.log(e.target);
        //         // e.target.parentNode.parentNode.querySelector('.value').innerText = e.target.value;
        //     });
        // }
        $('.colorpicker-value').on('change', e => {
            e.target.parentNode.parentNode.querySelector('.value').innerText = `"${e.target.value}"`;
        });
        this.node.addEventListener('click', e => {
            if (e.target.className.match(/(value)|(name)/)) {
                this.node.querySelectorAll('.value').forEach(node => {
                    node.contentEditable = false;
                });
                this.node.querySelectorAll('.name').forEach(node => {
                    node.contentEditable = false;
                });
                e.target.contentEditable = true;
                e.target.focus();
            } else {
                let flag = true;
                this.node.querySelectorAll('.value').forEach(node => {
                    if (node.contentEditable === 'true') {
                        node.contentEditable = false;
                        flag = false;
                    }
                });
                this.node.querySelectorAll('.name').forEach(node => {
                    if (node.contentEditable === 'true') {
                        node.contentEditable = false;
                        flag = false;
                    }
                });
                if (!flag) {
                    // this.getData(); // refresh data
                    // e.target.addEventListener('DOMCharacterDataModified', evt => {
                    e.target.innerHTML = e.target.textContent;
                    let parentNode = e.target.parentNode;
                    while (!parentNode.className.includes('children')) {
                        parentNode = parentNode.parentNode;
                    }
                    console.log(e.target, e.target.parentNode, parentNode);
                    this._partialRender(parentNode);
                    // });
                }
            }
        });
    }
}


const editor = new EditJson('#editor');
document.getElementById('test').onclick = e => editor.getData();