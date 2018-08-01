'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisiblityToggle = function (_React$Component) {
    _inherits(VisiblityToggle, _React$Component);

    function VisiblityToggle(props) {
        _classCallCheck(this, VisiblityToggle);

        var _this = _possibleConstructorReturn(this, (VisiblityToggle.__proto__ || Object.getPrototypeOf(VisiblityToggle)).call(this, props));

        _this.handleToggleVisiblity = _this.handleToggleVisiblity.bind(_this);

        _this.state = {
            visiblity: false
        };

        return _this;
    }

    _createClass(VisiblityToggle, [{
        key: 'handleToggleVisiblity',
        value: function handleToggleVisiblity() {
            this.setState(function (previousState) {
                return {
                    visiblity: !previousState.visiblity
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visiblity Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleVisiblity },
                    this.state.visiblity ? 'Hide Detail' : 'Show Details'
                ),
                this.state.visiblity && React.createElement(
                    'div',
                    null,
                    'hey these are some derail'
                )
            );
        }
    }]);

    return VisiblityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisiblityToggle, null), document.getElementById('app'));

// let visiblity = false;

// const toggleVisiblity = () =>{
//     visiblity = !visiblity;

//     randerApp();
// }
// const randerApp=() =>{
//     const template =(
//         <div>
//             <h1>Visiblity Toggle</h1>

//             <button onClick={toggleVisiblity}>
//             {visiblity ? 'Hide Detail' : 'Show Details'}
//             </button>
//             {visiblity &&(
//                 <div>Hey these are some detil you can see now</div>
//             )}
//         </div>

//     );
//     ReactDOM.render(template, document.getElementById('app'));

// }

// randerApp()
