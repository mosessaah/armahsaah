import Contact from './contact';

const footer=()=> {
    return (
        <footer id="ts-footer" class="mt-5">
            <Contact/>
            <div class="text-dark bg-white">
                <div class="container py-3 position-relative">
                    <small>© 2024 Armah, All Rights Reserved</small>
                    <a href="#page-top" class="ts-circle__xs rounded-0 bg-dark position-absolute ts-right__0 ts-top__0 ts-push-up__50 ts-scroll">
                        <i class="fa fa-arrow-up text-white"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default footer;