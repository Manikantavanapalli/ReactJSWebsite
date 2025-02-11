const Footer : React.FC =()=>{
    return(
        <div>
          <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-md font-medium">
                        Built with ❤️ to make React concepts easier to learn.
                    </p>
                    <p className="text-sm mt-2">
                        &copy; {new Date().getFullYear()} ReactJS Concepts. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;