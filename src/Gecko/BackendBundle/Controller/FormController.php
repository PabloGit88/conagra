<?php

namespace Gecko\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * Backend forms controller.
 */
class FormController extends Controller
{
	/**
	 * @param string $type
	 * @param string $template
	 *
	 * @return Response
	 */
	public function showAction($type, $template)
	{
		return $this->render($template, array(
				'form' => $this->createForm($type)->createView()
		));
	}

	/**
	 * Render filter form.
	 *
	 * @param string $type
	 * @param string $template
	 *
	 * @return Response
	 */
	public function filterAction($type, $template = 'GeckoBackendBundle:Form:filter.html.twig')
	{
		return $this->render($template, array(
				'form' => $this->get('form.factory')->createNamed('criteria', $type)->createView()
		));
	}
}