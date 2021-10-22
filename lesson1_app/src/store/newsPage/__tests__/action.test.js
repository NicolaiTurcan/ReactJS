import { PUBLIC_URL } from "../../../constants";
import { getArticles, getArticlesPending, GET_ARTICLES_PENDING } from "../actions";

describe("newsPage actions", () => {
    it('getArticlesPending action with type', () => {
        const expected = {
            type: GET_ARTICLES_PENDING,
        };
        const recived = getArticlesPending();
        expect(expected).toEqual(recived);
    });
    describe('getArticles tests', () => {
        it('getArticles test', async () => {
            const mockDispatch = jest.fn();
            fetchMock.mockOnce(
                JSON.stringify('some json response from server'));
            await getArticles()(mockDispatch);

            expect(mockDispatch).toHaveBeenCalledWith(getArticlesPending());
        });

        it("calls fetch with PUBLIC_URL", async () => {
            const mockDispatch = jest.fn();
            fetchMock.mockOnce(
                JSON.stringify(
                    "the next call to fetch will always return this as the body"));
            await getArticles()(mockDispatch);

            expect(fetchMock).toHaveBeenCalledWith(PUBLIC_URL);
        });

        it("calls dispatch with getArticles success with result from fetch", async () => {
            const mockDispatch = jest.fn();
            const result = ['article']
            fetchMock.mockOnce(
                JSON.stringify(result));
            await getArticles()(mockDispatch);

            expect(mockDispatch).toHaveBeenCalledTimes(1);
        });
    })
});