example:

    <div>
        <GlobalHeader title="Publications of the wednesday 17th" />
        <Prismic repo="react-prismic-cms">
            <QueryDayOfWeek path="document.first_publication_date" value="wed" component={ExampleCard} />
        </Prismic>
    </div>