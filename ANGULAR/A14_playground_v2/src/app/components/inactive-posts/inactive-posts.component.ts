import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
    posts!: Post[];

    constructor(private postsSrv: PostsService) {}

    ngOnInit(): void {
        this.recuperaDati();
    }

    async recuperaDati() {
        this.posts = await this.postsSrv.getPosts();
    }

    onActivePost(id: number, index: number) {
        this.postsSrv.updatePost({ active: true }, id);
        this.posts.splice(index, 1);
    }
}
