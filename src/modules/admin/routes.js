import Main from './main'

import { route as Blank }       from "./blank"
import { route as Customer }    from "./customer"
import { route as Dashboard }   from "./dashboard"
import { route as GiftList }    from "./gift-list"
import { route as Group }       from "./group"
import { route as Help }        from "./help"
import { route as Menu }        from "./menu"
import { route as Message }     from "./message"
import { route as Order }       from "./order"
import { route as Overview }    from "./overview"
import { route as Product }     from "./product"
import { route as Todo }        from "./todo"

export default [
    {

        path: '/admin/', component: Main,
        children: [
            {path: '', redirect: 'dashboard'},
            ...Blank,
            ...Customer,
            ...Dashboard,
            ...GiftList,
            ...Group,
            ...Help,
            ...Menu,
            ...Message,
            ...Order,
            ...Overview,
            ...Product,
            ...Todo
        ]
    }
]
