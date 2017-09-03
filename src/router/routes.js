import { route as admin } from "../modules/admin"
import { route as auth } from "../modules/auth"

export default [
    ...auth,
    ...admin
]
