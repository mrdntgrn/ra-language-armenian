module.exports = {
    ra: {
        action: {
            add_filter: 'Ավելացնել ֆիլտր',
            add: 'Ավելացնել',
            back: 'Ետ գնալ',
            bulk_actions: 'Ընտրված է 1 հատ |||| Ընտրված են %{smart_count} հատ',
            cancel: 'Չեղարկել',
            clear_input_value: 'Մաքրել արժեքը',
            clone: 'Կրկնօրինակել',
            confirm: 'Հաստատել',
            create: 'Ստեղծել',
            delete: 'Ջնջել',
            edit: 'Խմբագրել',
            export: 'Արտահանում',
            list: 'Ցուցակ',
            refresh: 'Թարմացնել',
            remove_filter: 'Հեռացնել այս ֆիլտրը',
            remove: 'Հեռացնել',
            save: 'Պահպանել',
            search: 'Որոնել',
            show: 'Ցուցադրել',
            sort: 'Տեսակավորել',
            undo: 'Չեղարկել',
            expand: 'Բացել',
            close: 'Փակել',
        },
        boolean: {
            true: 'Այո',
            false: 'Ոչ',
            null: '',
        },
        page: {
            create: 'Ստեղծել %{name}',
            dashboard: 'Տվյալների վահանակ',
            edit: '%{name} #%{id}',
            error: 'Ինչ որ բան այնպես չգնաց',
            list: '%{name}',
            loading: 'Բեռնում',
            not_found: 'Չի գտնվել',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:
                    'Վերցրեք/դրեք այստեղ ֆայլերը կամ սեղմեք ու ընտրեք:',
                upload_single: 'Վերցրեք/դրեք այստեղ ֆայլը կամ սեղմեք ու ընտրեք:',
            },
            image: {
                upload_several:
                    'Վերցրեք/դրեք այստեղ նկարները կամ սեղմեք ու ընտրեք:',
                upload_single:
                    'Վերցրեք/դրեք այստեղ նկարը կամ սեղմեք ու ընտրեք:',
            },
            references: {
                all_missing: 'Հղումով կապված տվյալները չեն գտնվել։',
                many_missing:
                    'Հղումով կապված տվյալներից գոնե մեկը հասանելի չէ։',
                single_missing:
                    'Հղումով կապված տվյալը հասանելի չէ։',
            },
            password: {
                toggle_visible: 'Թաքցնել գաղտնաբառը',
                toggle_hidden: 'Ցույց տալ գաղտնաբառը',
            },
        },
        message: {
            about: 'Տեղեկություն',
            are_you_sure: 'Դուք համոզվա՞ծ եք',
            bulk_delete_content:
                'Դուք համոզվա՞ծ եք ջնջել %{name} -ը |||| Դուք համոզվա՞ծ եք ջնջել %{smart_count} քանկությամբ օբյեկտներ',
            bulk_delete_title:
                'Ջնջել %{name} -ը |||| Ջնջել %{smart_count} հատ %{name}',
            delete_content: 'Դուք համոզվա՞ծ եք ջնջել այս օբյեկտը',
            delete_title: 'Ջնջել %{name} -ը #%{id}',
            details: 'Մանրամասներ',
            error:
                'Տեղի է ունեցել սխալ, և ձեր հարցումը չի կարող կատարվել:',
            invalid_form: 'Ձևը(Ֆորման) վավեր չէ։ Խնդրում ենք ստուգել սխալները',
            loading: 'Էջը բեռնվում է, խնդրում եմ սպասել',
            no: 'Ոչ',
            not_found:
                'Սխալ հասցեի(URL) լրացում կամ դուք հետևել եք ոչ ճիշտ հղման։',
            yes: 'Այո',
        },
        navigation: {
            no_results: 'Ոչ մի արդյունք չի գտնվել',
            no_more_results:
                'Էջի %{page} համարը դուրս է սահմաններից։ Փորձեք նախորդ էջը:',
            page_out_of_boundaries: 'Էջի %{page} համարը դուրս է սահմաններից։',
            page_out_from_end: 'Անհնար է անցնել վերջին էջից հետո',
            page_out_from_begin: 'Անհնար է անցնել 1-ին էջից առաջ',
            page_range_info: '%{offsetBegin}-%{offsetEnd} %{total} -ից',
            page_rows_per_page: 'Տողերի քանակը մեկ էջում.',
            next: 'Հաջորդ',
            prev: 'Նախորդ',
        },
        auth: {
            auth_check_error: 'Խնդրում ենք մուտք գործել ՝ շարունակելու համար',
            user_menu: 'Անձնական կարգավորումներ',
            username: 'Օգտանուն',
            password: 'Գաղտնաբառ',
            sign_in: 'Մուտք',
            sign_in_error: 'Նույնականացումը չհաջողվեց, խնդրում ենք փորձել նորից',
            logout: 'Ելք',
        },
        notification: {
            updated: 'Օբյեկտը թարմացվեց |||| %{smart_count} հատ օբյեկտ թարմացվեց',
            created: 'Օբյեկտը ստեղծվեց',
            deleted: 'Օբյեկտը ջնջվեց |||| %{smart_count} հատ օբյեկտ ջնջվեց',
            bad_item: 'Սխալ օբյեկտ',
            item_doesnt_exist: 'Օբյեկտը գոյություն չունի',
            http_error: 'Սերվերի հետ կապի խնդիր',
            data_provider_error:
                'dataProvider-ի խնդիր։ Ստուգեք վահանակը(console) մանրամասների համար։',
            i18n_error:
                'Չհաջողվեց բեռնել նշված լեզվով թարգմանությունները',
            canceled: 'Գործողությունը չեղարկված է',
            logged_out: 'Ձեր սեսիան ավարտվեց, խնդրում ենք նորից միանալ:',
        },
        validation: {
            required: 'Պարտադիր',
            minLength: 'Պենք է պարունակի %{min} կամ ավել հատ նիշ',
            maxLength: 'Պենք է պարունակի %{max} կամ պակաս հատ նիշ',
            minValue: 'Պենք է լինի %{min} կամ ավել',
            maxValue: 'Պենք է լինի %{max} կամ պակաս',
            number: 'Պենք է լինի թիվ',
            email: 'Պենք է լինի վավեր էլեկտրոնային փոստի հասցե(email)',
            oneOf: 'Պենք է լինի հետևյալ տարբերակներից մեկը. %{options}',
            regex: 'Պետք է համապատասխանի հատուկ ֆորմատին (regexp): %{pattern}',
        },
    },
};