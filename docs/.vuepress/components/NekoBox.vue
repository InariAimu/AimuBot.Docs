<template>
    <div class="qq-chat">

        <div class="qq-chat-toolbar">
            <div class="qq-chat-toolbar-icon">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div>
                <div class="center">
                    <h4 class="qq-chat-title" align="center">AimuBot ⭐</h4>
                </div>
            </div>
            <div class="qq-chat-toolbar-icon">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </div>
        </div>

        <div class="chat chat-bg">
            <template v-for="(item, index) in messages">
                <div v-if="item.position === 'right'" :key="index"
                    class="c-row c-msg-end justify-end message wow animate__fadeInRight" data-wow-duration="0.7s">

                    <template v-if="this.imgOnly(item.chain)">
                        <div class="message-box-img">
                            <img class="medium-zoom-image img-only-img" :src="item.chain[0].img" />
                        </div>
                    </template>
                    <template v-else-if="typeof item.msg === 'string' && item.msg.length > 0">
                        <div class="message-box" v-html="this.text2Html(item.msg)">
                        </div>
                    </template>
                    <template v-else>
                        <div class="message-box">
                            <template v-for="c in item.chain">
                                <p class="msg-p" v-if="typeof c.msg === 'string' && c.msg.length > 0"
                                    v-html="this.text2Html(c.msg)">
                                </p>
                                <span class="msg-span-at" v-if="typeof c.at === 'string' && c.at.length > 0"
                                    v-html="this.text2Html(c.at)">
                                </span>
                                <div class="c-row msg-p-reply" v-if="typeof c.reply === 'string' && c.reply.length > 0">
                                    <p class="msg-p-reply" v-html="this.text2Html(c.reply)">
                                    </p>
                                    <div class="c-reply-icon c-btn-wrap">
                                        <font-awesome-icon :icon="['fas', 'arrow-up']" />
                                    </div>
                                </div>
                                <img class="medium-zoom-image c-inline-img" v-if="typeof c.img === 'string' && c.img.length > 0" :src="c.img" />
                            </template>
                        </div>
                    </template>

                    <div class="c-avatar" color="transparent" size="36">
                        <h4 class="toolbar-h4">🐱</h4>
                    </div>
                </div>

                <div v-else-if="item.position === 'left'" :key="index + 1"
                    class="c-row c-msg-start message wow animate__fadeInLeft" data-wow-duration="0.7s">
                    <div class="c-avatar" color="transparent" size="36">
                        <div class="c-avatar-inner"></div>
                    </div>

                    <template v-if="this.imgOnly(item.chain)">
                        <div class="message-box-img">
                            <img class="medium-zoom-image img-only-img" :src="item.chain[0].img" />
                        </div>
                    </template>
                    <template v-else-if="typeof item.msg === 'string' && item.msg.length > 0">
                        <div class="message-box" v-html="this.text2Html(item.msg)">
                        </div>
                    </template>
                    <template v-else>
                        <div class="message-box">
                            <template v-for="c in item.chain">
                                <p class="msg-p" v-if="typeof c.msg === 'string' && c.msg.length > 0"
                                    v-html="this.text2Html(c.msg)">
                                </p>
                                <span class="msg-span-at" v-if="typeof c.at === 'string' && c.at.length > 0"
                                    v-html="this.text2Html(c.at)">
                                </span>
                                <div class="c-row msg-reply" v-if="typeof c.reply === 'string' && c.reply.length > 0">
                                    <p class="msg-p-reply" v-html="this.text2Html(c.reply)">
                                    </p>
                                    <div class="c-reply-icon c-btn-wrap">
                                        <font-awesome-icon :icon="['fas', 'arrow-up']" />
                                    </div>
                                </div>
                                <img class="medium-zoom-image c-inline-img" v-if="typeof c.img === 'string' && c.img.length > 0" :src="c.img" />
                            </template>
                        </div>
                    </template>

                </div>
                <div v-else :key="index + 2" class="notify justify-center wow animate__fadeIn" data-wow-duration="1.0s">
                    <div class="notify-box">
                        <span v-if="typeof item.info === 'string'"
                            style="display: inline; white-space: nowrap;margin-right:5px;">
                            <font-awesome-icon :icon="['fas', 'info-circle']" />
                        </span>
                        <span v-html="this.text2Html(item.msg)"></span>
                    </div>
                </div>
            </template>
        </div>

        <div class="chat-bg qq-chat-footer">
            <div class="c-input-wrap">
                <input class="c-input" id="input-616" placeholder="This is not an inputbox (for now)">
            </div>
            <div class="c-btn-wrap">
                <button class="c-btn" style="font-size: 0.8rem">发送</button>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import "animate.css/animate.min.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faBars, faInfoCircle, faArrowUp } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronLeft, faBars, faInfoCircle, faArrowUp);


export default {
    name: "NekoBox",
    props: {
        messages: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        imgOnly: function (chain) {
            if (typeof chain === 'undefined') return false;
            if (chain.length == 1) {
                if (typeof chain[0].img === 'string' && chain[0].img.length > 0)
                    return true;
            }
            return false;
        },
        text2Html: function (text) {
            return text.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;');
        }
    },
    async mounted() {
        const module = await import('wow.js');
        new module.default({
            boxClass: "wow",
            animateClass: "animate__animated",
            offset: 0,
            mobile: true,
            live: true,
            scrollContainer: null,
            resetAnimation: true,
        }).init();
    },
};
</script>

<style scoped>
.wow {
    visibility: hidden;
}

.chat {
    padding: 14px 12px 14px 12px;
    min-height: 100px;
    overflow-x: hidden;
}

.chat-bg {
    background-color: var(--c-bg-light);
    width: auto;
}

.qq-chat {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
    transition-property: box-shadow, opacity;
    margin: 0 0 30px 0;
    border-radius: 6px;
}

.qq-chat-toolbar {
    border-radius: 6px 6px 0 0;
    background-color: #E53935;
    height: 42px;
    display: flex;
    justify-content: space-between;
}

.qq-chat-toolbar-icon {
    padding: 10px;
    width: 24px;
    height: 24px;
    color: white;
    text-align: center;
}

.qq-chat-title {
    color: white;
    padding-top: 58px;
}

.c-avatar {
    background-color: #BBDEFB;
    border-color: rgba(0, 0, 0, 0);
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.87);
    box-sizing: border-box;
    width: 36px;
    height: 36px;
}

.c-avatar-inner {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background-image: url(/images/profile.jpg);
    background-position: center;
    box-sizing: border-box;
    background-size: cover;
}

.message {
    position: relative;
    margin: 0;
}

.message .message-box {
    position: relative;
    width: fit-content;
    max-width: 60%;
    border-radius: 0.5rem;
    padding: 0.4rem 0.6rem;
    margin: 0.4rem 0.8rem;
    background-color: var(--c-bg);
    word-break: break-all;
}

.message .message-box-img {
    position: relative;
    width: fit-content;
    max-width: 55%;
    border-radius: 0.5rem;
    padding: 0.5rem 0rem;
    margin: 0.4rem 0.8rem;
    background-color: transparent;
}

.img-only-img {
    border-radius: 8px;
}

.message .message-box-img::after {
    content: "";
    position: absolute;
    right: 100%;
    top: 0;
    width: 8px;
    height: 12px;
    color: transparent;
    border: 0 solid transparent;
    border-bottom: 7px solid;
    border-radius: 0 0 0 8px;
}

.message .message-box::after {
    content: "";
    position: absolute;
    right: 100%;
    top: 0;
    width: 8px;
    height: 12px;
    color: var(--c-bg);
    border: 0 solid transparent;
    border-bottom: 7px solid;
    border-radius: 0 0 0 8px;
}

.message.justify-end .message-box::after {
    left: 100%;
    right: auto;
    border-radius: 0 0 8px 0;
}

.msg-p {
    margin: 0;
}

.msg-span-at {
    margin: 0;
    padding-right: 3px;
    color: #2c3e50;
    background-color: rgba(152, 251, 152, 0.726);
}

.msg-p-reply {
    margin: 0;
    color: var(--c-text-light);
    padding: 0.2rem 1.8rem 0.2rem 0.4rem;
}

.msg-reply {
    margin-top: 2px;
    margin-bottom: 8px;
    color: var(--c-text-light);
    background-color: var(--c-bg-lighter);
    justify-content: space-between;
    border-radius: 5px;
}

.notify {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 5px 0 5px 0;
}

.notify.justify-center {
    left: auto;
    right: auto;
}

.notify .notify-box {
    max-width: 70%;
    background: var(--c-bg-lighter);
    border-radius: 5px;
    padding: 5px 12px;
    font-size: 12px;
}

.c-row {
    display: flex;
}

.c-msg-end {
    justify-content: flex-end;
}

.c-msg-start {
    justify-content: flex-start;
}

.toolbar-h4 {
    padding-top: 56px;
    padding-left: 5px;
}

.qq-chat-footer {
    display: flex;
    padding: 5px 12px 10px 12px;
    justify-content: space-between;
    border-radius: 0 0 6px 6px;
}

.c-btn {
    border-radius: 5px;
    background-color: #E53935;
    border-style: none;
    color: white;
    height: 28px;
    width: 55px;
}

.c-btn-wrap {
    justify-content: flex-end;
}

.c-input {
    background-color: transparent;
    border-style: none;
    border-radius: 0;
    max-width: 100%;
    width: 100%;
    margin: 0;
    line-height: 20px;
    border: transparent;
    outline: none;
}

.c-input-wrap {
    flex-grow: 1;
    flex-basis: 0;
    margin-right: 8px;
    padding: 2px 5px 0 5px;
    border-radius: 4px;
    background-color: var(--c-bg);
}

.c-reply-icon {
    width: 16px;
    padding-top: 5px;
    padding-right: 3px;
}

.c-inline-img {
    border-radius: 5px;
}
</style>
