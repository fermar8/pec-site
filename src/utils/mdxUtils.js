import matter from 'gray-matter';
import {join} from 'path';
import fs from 'fs';


// path to our list of available posts
const POSTS_PATH = join(process.cwd(), 'src/posts');

// get the file paths of all available list of posts
function getPostsFilePaths(){
    return (
        // return the mdx file post path
        fs.readdirSync(POSTS_PATH)
        // load the post content from the mdx files
        .filter((path) => /\.md?$/.test(path))
    )
}

// getting a single post
export function getPost(slug) {
    // add path/location to a single post
    const fullPath = join(POSTS_PATH,`${slug}.md`);
    // post's content
    const fileContents = fs.readFileSync(fullPath,'utf-8');
    // get the front matter data and content
    const {data,content} = matter(fileContents);
    // return the front matter data and content
    return { data,content};
}

// load the post items
export function getPostItems(filePath,fields = []){
    // create a slug from the mdx file location
    const slug = filePath.replace(/\.md?$/,"");
    // get the front matter data and content
    const {data,content} = getPost(slug);

    const items = {};

    // just load and include the content needed
    fields.forEach((field) => {
        // load the slug
        if(field === 'slug'){
            items[field] = slug;
        }
        // load the post content
        if(field === 'content'){
            items[field] = content;
        }
        // check if the above specified field exists on data
        if(data[field]){
            // verify the fileds has data
            items[field] = data[field];
        }
    });
    // return the post items
    return items;
}

// getting all posts
export function getAllPosts(fields){
    // add paths for getting all posts 
    const filePaths = getPostsFilePaths();
    // get the posts from the filepaths with the needed fields sorted by date
    const posts = filePaths.map((filePath) => getPostItems(filePath,fields)).sort((post1,post2) => post1.date > post2.date ? 1 : -1);
    // return the available post
    return posts;
}