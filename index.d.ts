declare module 'react-aux' {
    import * as React from 'react';
    type AuxProps = {
        children: Array<React.Component>
    }
    class Aux extends React.Component<AuxProps, any> {}
    export default Aux;
}
