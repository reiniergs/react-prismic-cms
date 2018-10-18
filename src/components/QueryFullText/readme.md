full text example:

    const Input = require('react-rainbow-components/components/Input').default;

    const inputStyle = {
        maxWidth: 200,
        marginTop: 24,
        marginLeft: 48,
    };

    class FullTextExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: '',
            }
        }

        render() {
            const { value } = this.state;

            return (
                <div>
                    <GlobalHeader title="vegetables" />
                    <Input
                        style={inputStyle}
                        placeholder="Search"
                        value={value}
                        onChange={(e) => this.setState({ value: e.target.value })} />

                    <Prismic repo="react-prismic-cms">
                        <QueryFullText
                            path="document"
                            value={value}
                            component={ExampleCard} />

                    </Prismic>
                </div>
            );
        }
    }

    <FullTextExample />


fruits full text:

    const Input = require('react-rainbow-components/components/Input').default;

    const inputStyle = {
        maxWidth: 200,
        marginTop: 24,
        marginLeft: 48,
    };

    class FullTextExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: '',
            }
        }

        render() {
            const { value } = this.state;

            return (
                <div>
                    <GlobalHeader title="fruits" />
                    <Input
                        style={inputStyle}
                        placeholder="Fruit Search"
                        value={value}
                        onChange={(e) => this.setState({ value: e.target.value })} />

                    <Prismic repo="react-prismic-cms">
                        <QueryFullText
                            path="my.fruits.name"
                            value={value}
                            component={ExampleCard} />

                    </Prismic>
                </div>
            );
        }
    }

    <FullTextExample />
