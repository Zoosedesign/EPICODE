import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
    posts!: Post[];

    constructor(private postsSrv: PostsService) {}

    ngOnInit(): void {
        this.recuperaDati();
    }

    async recuperaDati() {
        this.posts = await this.postsSrv.getPosts();
    }

    onInactivePost(id: number, index: number) {
        this.postsSrv.updatePost({ active: false }, id);
        this.posts.splice(index, 1);
    }
}
