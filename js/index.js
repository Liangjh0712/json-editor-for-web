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
        // this.getData = this.getData.bind(this);
    }
    render(json) {
        this._getHtmlCodeByJson(json);
        this.node.innerHTML = this.htmlCodeStr;
    }

    getData() {
        let temp = this.node.textContent;
        // temp = temp.replace(/\<[^\>]*\>/gm, '');
        // temp = JSON.stringify(temp);
        // temp = temp.replace(/(\\n)|\ {2}/gm, '');
        // temp = temp.replace(/\\+/gm, '\\');
        console.log(JSON.parse(temp), temp);
        // return temp;
    }

    _getHtmlCodeByJson(json, key, comma) {
        let typeStr = Object.prototype.toString.call(json);
        switch (typeStr) {
            case '[object Object]':
            {
                this.htmlCodeStr += `<div class="jsonView"><div class="expend"></div>`;
                this.htmlCodeStr += key ? `<div class="name object-type">"${key}"</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="bracket">{</div><div class="delete"></div>
                  <div class="children">`;
                let length = Object.keys(json).length;
                for (let key in json) {
                    let flag = --length > 0 ? ',' : '';
                    this._getHtmlCodeByJson(json[key], key, flag);
                }
                this.htmlCodeStr += `</div>
                  <div class="bracket">}</div><div class="comma">${comma || ''}</div><div class="insert"></div></div>`;
                break;
            }
            case '[object Array]':
            {
                this.htmlCodeStr += `<div class="jsonView"><div class="expend"></div>`;
                this.htmlCodeStr += key ? `<div class="name array-type">"${key}"</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="bracket">[</div><div class="delete"></div>
                  <div class="children">`;
                let length = json.length;
                for (let value of json) {
                    let flag = --length > 0 ? ',' : '';
                    this._getHtmlCodeByJson(value, '', flag);
                }
                this.htmlCodeStr += `</div>
                  <div class="bracket">]</div><div class="comma">${comma || ''}</div><div class="insert"></div></div>`;
                break;
            }
            default:
            {
                let temp = this._judgeFootColor(key, json);
                this.htmlCodeStr += `<div class="jsonView">`;
                this.htmlCodeStr += key ? `<div class="name ${temp[0] || ''}">"${key}"</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="value ${temp[1] || ''}">"${json}"</div>
                                    <div class="delete"></div>
                                    <div class="children"></div>
                                    <div class="comma">${comma || ''}</div>
                                    <div class="insert"></div>
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
                    return ['color-type', 'color-value'];
                } else {
                    return '';
                }
            }
            case '[object Boolean]':
            {
                return ['bool-type', 'bool-value'];
            }
            case '[object Number]':
            {
                return ['number-type', 'number-value'];
            }
            case '[object Date]':
            {
                return ['date-type', 'data-value'];
            }
            default:
            {
                return '';
            }
        }
    }

    _event() {
        this.node.addEventListener('mousedown', e => {
            e.preventDefault();
            const clickNode = e.target;
            switch (clickNode.className) {
                case 'collapse':
                {
                    clickNode.className = 'expend';
                    clickNode.parentNode.querySelector('.children').style.display = 'inline-block';
                    break;
                }
                case 'expend':
                {
                    clickNode.className = 'collapse';
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
}


const editor = new EditJson('#editor');
document.getElementById('test').onclick = e => editor.getData();