import React from 'react'; // 为什么要 import React
//因为新建的welcome需要作为react.component的子类，需要引用react。


class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome // 为什么要 export，为什么要加 default
//export是为了暴露接口给其他调用welcome的文件；
//export default 是默认导出，只想到出一个简单值或者想在模块中保留一个候选值时采用
