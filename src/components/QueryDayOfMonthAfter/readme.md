example:

    <div>
        <GlobalHeader title="Publications after 16th" />
        <Prismic repo="react-prismic-cms">
            <QueryDayOfMonthAfter path="document.first_publication_date" value={16} component={ExampleCard} />
        </Prismic>
    </div>