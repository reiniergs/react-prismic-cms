fruits less than $10:

    <div>
        <GlobalHeader title="Fruits less than $10" />
        <Prismic repo="react-prismic-cms">
            <QueryLessThan path="my.fruits.price" value={10} component={ExampleCard} />
        </Prismic>
    </div>