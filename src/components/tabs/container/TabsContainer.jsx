import { useState } from "react";
import Content from "../components/Content";
import Tab from "../components/Tab";
import styles from "../styles/tabs.module.css"


const tabs = [
    {
        title: "Spaghetti Carbonara",
        content: <div><div>Cook spaghetti according to package instructions until al dente.</div>
            <div>Meanwhile, fry diced pancetta until crispy. Remove from pan and set aside.</div>
            <div>In a bowl, whisk together eggs, grated Parmesan cheese, and black pepper.</div>
            <div>Drain cooked spaghetti, reserving some pasta water. Add spaghetti to the pan with pancetta fat.</div>
            <div>Quickly toss spaghetti in the fat, then remove from heat and pour in egg mixture. Toss until well combined, adding pasta water as needed for a creamy consistency.</div>
            <div>Serve immediately with extra Parmesan cheese and black pepper.</div>
        
        </div>
            
    },
    {
        title: "Chicken Stir-Fry",
        content: <div>
        <div>Marinate chicken strips in soy sauce, minced garlic, and ginger for 30 minutes.</div>
        <div>Heat oil in a wok or large skillet over high heat. Stir-fry marinated chicken until cooked through, then remove from pan.</div>
        <div>In the same pan, stir-fry sliced bell peppers, onions, and snap peas until tender-crisp.</div>
        <div>Add back the cooked chicken to the pan. Stir in a mixture of soy sauce, oyster sauce, and a splash of chicken broth.</div>
        <div>Cook until heated through and sauce thickens slightly. Serve hot over steamed rice.</div>
    </div>
    },
    {
        title: "Caprese Salad",
        content: <div>
        <div>Slice ripe tomatoes and fresh mozzarella cheese into rounds.</div>
        <div>Arrange tomato and mozzarella slices on a plate, alternating and overlapping them.</div>
        <div>Drizzle with extra virgin olive oil and balsamic glaze.</div>
        <div>Season with salt, freshly ground black pepper, and torn fresh basil leaves.</div>
        <div>Serve immediately as a refreshing appetizer or side dish.</div>
    </div>
    },
    {
        title: "Quinoa Bowl",
        content: <div>
        <div>Cook quinoa according to package instructions.</div>
        <div>Meanwhile, roast a mixture of your favorite vegetables (such as bell peppers, zucchini, carrots, and cherry tomatoes) tossed in olive oil, salt, and pepper, until tender.</div>
        <div>In a small bowl, whisk together olive oil, lemon juice, minced garlic, and dried oregano to make a dressing.</div>
        <div>Assemble bowls with cooked quinoa as the base, topped with roasted vegetables, crumbled feta cheese, and a drizzle of the dressing.</div>
        <div>Garnish with fresh parsley and enjoy a nutritious and flavorful meal.</div>
    </div>
    },
    {
        title: "Beef Lasagna",
        content:<div>
        <div>Brown ground beef in a skillet over medium heat. Drain excess fat, then stir in marinara sauce and simmer for 10 minutes.</div>
        <div>In a separate bowl, mix together ricotta cheese, shredded mozzarella cheese, grated Parmesan cheese, and chopped fresh parsley.</div>
        <div>Preheat oven to 375°F (190°C). In a baking dish, spread a thin layer of the meat sauce.</div>
        <div>Arrange lasagna noodles over the sauce, followed by a layer of the cheese mixture. Repeat layers, ending with a layer of meat sauce on top.</div>
        <div>Cover with foil and bake for 45 minutes. Remove foil and bake for an additional 15 minutes, or until bubbly and golden brown.</div>
        <div>Let it cool for a few minutes before slicing and serving with garlic bread and a green salad.</div>
    </div>
    }
]

function TabsContainer(){
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const clickHandler = (index) => {
        setCurrentTabIndex((prev)=>index);
    }

    


    return(
        <div className={styles.container}>
            <div className={styles.tabsWrapper}>
            {
                tabs.map((item,index)=><Tab key={index} currentTabIndex={currentTabIndex} index={index} clickHandler={clickHandler} title={item.title}/>)
            }
            </div>
    
            <Content content={tabs[currentTabIndex].content}/>
     
        </div>
    )
}   

export default TabsContainer;