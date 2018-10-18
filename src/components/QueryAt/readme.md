vegetables:

    <div>
        <GlobalHeader title="vegetables" />
        <Prismic repo="react-prismic-cms">
            <QueryAt path="document.type" value="vegetables" component={ExampleCard} />
        </Prismic>
    </div>

red vegetables:

    <div>
        <GlobalHeader title="red vegetables" />
        <Prismic repo="react-prismic-cms">
            <QueryAt path="document.tags" value={['red']} component={ExampleCard} />
        </Prismic>
    </div>
