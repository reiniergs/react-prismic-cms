fruits greater than $8:

    <div>
        <GlobalHeader title="Fruits greater than $8" />
        <Prismic repo="react-prismic-cms">
            <QueryGreaterThan path="my.fruits.price" value={8} component={ExampleCard} />
        </Prismic>
    </div>
