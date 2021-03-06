var React = require('react');
var Dropzone = require('react-dropzone');

export default React.createClass({
	getInitialState : function() {
        return {files: undefined};
	},

	 onDrop: function (files) {
      this.setState({
        files: files
      });
    },

    onOpenClick: function () {
      this.refs.dropzone.open();
    },

    render: function () {
      return (
           <div className="column">
            <div className="column two-fourth">
              <Dropzone ref="dropzone" className="dropzone inlineBlock" onDrop={this.onDrop} >
                <div>请拖拉图片，或点击“选择”按钮选择图片</div>
              </Dropzone>
              <button type="button" className="buttonSmall" onClick={this.onOpenClick}>
                  选择图片
              </button>
            </div>

             {this.state.files ?
            <div className="smallPictureContainer column two-fourth">{this.state.files.map((file) => <img key={file.name} src={file.preview} />)}</div>: null}
          </div>
      );
    }
});