'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

google.charts.load('visualization', '1', {
  'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

var GraphComponent = function (_React$Component) {
  _inherits(GraphComponent, _React$Component);

  function GraphComponent() {
    _classCallCheck(this, GraphComponent);

    return _possibleConstructorReturn(this, (GraphComponent.__proto__ || Object.getPrototypeOf(GraphComponent)).call(this));
  }

  _createClass(GraphComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.state = {
        data: this.dataTable()
      };

      this.draw();
    }
  }, {
    key: 'dataTable',
    value: function dataTable() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Element');
      data.addColumn('number', 'Percentage');
      data.addRows([['Nitrogen', 0.78], ['Oxygen', 0.21], ['Other', 0.01]]);

      return data;
    }
  }, {
    key: 'draw',
    value: function draw() {

      var data = this.state.data;
      console.log(data);
      var element = this.chartDiv;
      var chart = new google.visualization.PieChart(element);
      chart.draw(data, null);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement('div', { ref: function ref(div) {
          _this2.chartDiv = div;
        } });
    }
  }]);

  return GraphComponent;
}(React.Component);

var AppComponent = function (_React$Component2) {
  _inherits(AppComponent, _React$Component2);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(GraphComponent, null)
      );
    }
  }]);

  return AppComponent;
}(React.Component);

function drawChart() {
  ReactDOM.render(React.createElement(AppComponent, null), mountNode);
}
//# sourceMappingURL=script.js.map
