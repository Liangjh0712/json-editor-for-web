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
        this._getHtmlCodeByJson(json);
        this.node.innerHTML = this.htmlCodeStr;
    }

    _getHtmlCodeByJson(json, key) {
        let typeStr = Object.prototype.toString.call(json);
        switch (typeStr) {
            case '[object Object]':
            {
                this.htmlCodeStr += `<div class="jsonView"><div class="expend"></div>`;
                this.htmlCodeStr += key ? `<div class="name object-type">${key}</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="bracket">{</div><div class="delete"></div>
                  <div class="children">`;
                for (let key in json) {
                    this._getHtmlCodeByJson(json[key], key);
                }
                this.htmlCodeStr += `</div>
                  <div class="insert"></div><div class="bracket">}</div></div>`;
                break;
            }
            case '[object Array]':
            {
                this.htmlCodeStr += `<div class="jsonView"><div class="expend"></div>`;
                this.htmlCodeStr += key ? `<div class="name array-type">${key}</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="bracket">[</div><div class="delete"></div>
                  <div class="children">`;
                for (let value of json) {
                    this._getHtmlCodeByJson(value, '');
                }
                this.htmlCodeStr += `</div>
                  <div class="insert"></div><div class="bracket">]</div></div>`;
                break;
            }
            default:
            {
                let temp = this._judgeFootColor(key, json);

                this.htmlCodeStr += `<div class="jsonView">`;
                this.htmlCodeStr += key ? `<div class="name ${temp[0] || ''}">${key}</div><div class="separator">:</div>` : ``;
                this.htmlCodeStr += `<div class="value ${temp[1] || ''}">${json}</div>
                                    <div class="delete"></div>
                                    <div class="children"></div>
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
        //     if (e.target.className.includes('jsonView')) {
        //         e.target.className += ' active-background';
        //     } else {
        //         e.target.parentNode.className += ' active-background';
        //     }
        // });
        // this.node.addEventListener('mouseout', e => {
        //     if (e.target.className.includes('jsonView')) {
        //         e.target.className = e.target.className.replace(/\ active\-background/gm, '');
        //     } else {
        //         e.target.parentNode.className = e.target.parentNode.className.replace(/\ active\-background/gm, '');
        //     }
        // });
    }
}


new EditJson('#editor');