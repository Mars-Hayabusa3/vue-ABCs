const Playlist = {
    data () {
        return {
            playlist: ['暗流', '新世紀的女兒', 'I Hear a Symphony'],
            searchTerm: "",
        };
    },
    computed: { // 相當於 js 的 .filter()
        filteredPlaylist () {
            if (this.searchTerm) {
                return this.playlist.filter((song) => 
                    song.toLowerCase().includes(this.searchTerm.toLowerCase())
                    // 歌名包含搜尋內容則 return, 英文一綠 toLowerCase比對
                );
            } else {
                return this.playlist;
            }
        }
    }
};

Vue.createApp(Playlist).mount('#app');
// createApp 以前叫 new Vue();