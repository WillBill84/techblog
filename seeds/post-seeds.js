const { Post } = require('../models');

const postData = [{
    title: 'First Blog Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed dolor a felis finibus suscipit a vel purus. Sed tristique at nisl eget scelerisque. Cras porta nulla eros, ac rutrum est porttitor nec. Proin id magna a lacus faucibus accumsan vitae congue odio. Nulla eget diam eu lacus venenatis suscipit sed vel ipsum. Sed et risus est. Donec in leo non neque condimentum hendrerit. Suspendisse nibh tellus, congue sed dignissim in, laoreet quis lectus.',
    user_id: 1

},
{
    title: 'Post Two',
    content: 'Nunc convallis felis sit amet nibh gravida fermentum. Fusce sed ligula convallis, ultricies urna eget, imperdiet nulla. Nulla et lorem ex. Cras vitae mauris sit amet neque rutrum ultrices ac et risus. Sed erat risus, imperdiet at nisi vel, mollis interdum risus. Aenean nec diam nec ex ultricies interdum.',
    user_id: 2
},
{
    title: 'Post Three',
    content: 'ed aliquam lectus non ligula feugiat, a egestas nibh vehicula. Nulla facilisi. Donec rutrum tellus at eleifend dictum. Fusce eget sagittis sem, quis facilisis libero. Nam non urna quam.',
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;