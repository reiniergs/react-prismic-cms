all vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryAt path="document.type" value="vegetables" component={ExampleCard} title="Vegetables" />
    </Prismic>

red vegetables:

    <Prismic repo="react-prismic-cms">
        <QueryAt path="document.tags" value={['red']} component={ExampleCard} title="Red Vegetables" />
    </Prismic>
