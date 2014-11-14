<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Backend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\SecurityContext;

/**
 * Backend security controller.
 */
class SecurityController extends Controller
{
    /**
     * @param Request $request
     *
     * @return Response
     */
    public function loginAction(Request $request)
    {
        $session = $request->getSession();
        $error = null;

        if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $request->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
        } elseif (null !== $session && $session->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $session->get(SecurityContext::AUTHENTICATION_ERROR);
            $session->remove(SecurityContext::AUTHENTICATION_ERROR);
        }

        if ($error) {
            $error = $error->getMessage();
        }

        $lastUsername = (null === $session) ? '' : $session->get(SecurityContext::LAST_USERNAME);

        $csrfToken = $this
            ->getFormCsrfProvider()
            ->generateCsrfToken('authenticate')
        ;

        return $this->render('GeckoBackendBundle:Security:login.html.twig', array(
            'last_username' => $lastUsername,
            'error'         => $error,
            'token'         => $csrfToken,
        ));
    }

    public function checkAction()
    {
        throw new \RuntimeException('You must configure the check path to be handled by the firewall.');
    }

    public function logoutAction()
    {
        throw new \RuntimeException('You must activate the logout in your security firewall configuration');
    }

    private function getFormCsrfProvider()
    {
        return $this->get('form.csrf_provider');
    }
}
